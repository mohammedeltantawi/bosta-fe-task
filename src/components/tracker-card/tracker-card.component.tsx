import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { TransitEventsState } from '../../enums/transit-events.enum';
import { ShipmentTrackResponse } from '../../models/shipment-track-response.model';
import { getDateDayDateTime, getDateDMY } from '../../services/global-functions';
import "./tracker-card.style.css";

interface TrackerCardProps {
    shipmentDetails: ShipmentTrackResponse;
}
const TrackerCard = ({ shipmentDetails }: TrackerCardProps) => {

    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    // const isMobile = width <= 768;

    const getShipmentDetailsStatusClass= (): string => {
        switch(shipmentDetails.CurrentStatus.state) {
            case (TransitEventsState.DELIVERED || TransitEventsState.DELIVERED_TO_SENDER): return "success";
            case (TransitEventsState.CANCELLED): return "cancelled";
            default: return "waiting";
        }
    }

    const getShipmentBarStatusClass= (step?: number): string => {
        let result = "";
        if (shipmentDetails.CurrentStatus.state === TransitEventsState.DELIVERED || shipmentDetails.CurrentStatus.state === TransitEventsState.DELIVERED_TO_SENDER) {
            result = "success-background"
        } else {
            if (step === 4) {
                result = "grey-background"
            } else {
                if (shipmentDetails.CurrentStatus.state === TransitEventsState.CANCELLED) {
                    result = "cancelled-background"
                } else {
                    result = "waiting-background"
                }
            }
        }
        return `rounded-full w-12 h-4 ${result}`
    }
  return (
    <div className="w-[95%] md:w-[84%] py-5 border border-solid border-var(--primary-border) rounded-lg">
        <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-0 pb-[30px] px-5'>
            <div className='flex flex-col gap-1 md:gap-2'>
                <p className='pair-title'>
                    {t("trackerCard.shipmentNumber")} {shipmentDetails.TrackingNumber}  
                </p>
                <p className={`pair-value ${getShipmentDetailsStatusClass()}`}>
                    {t(`transitStatus.${shipmentDetails.CurrentStatus.state}`)} 
                </p>
            </div>

            <div className='flex flex-col gap-1 md:gap-2'>
                <p className='pair-title'>
                    {t("trackerCard.lastUpdate")} 
                </p>
                <p className='pair-value'>
                    {getDateDayDateTime(shipmentDetails.CurrentStatus.timestamp)} 
                </p>
            </div>

            <div className='flex flex-col gap-1 md:gap-2'>
                <p className='pair-title'>
                    {t("trackerCard.merchantName")}
                </p>
                <p className='pair-value'>
                    {shipmentDetails.provider}
                </p>
            </div>

            <div className='flex flex-col gap-1 md:gap-2'>
                <p className='pair-title'>
                    {t("trackerCard.deliveryDate")}
                </p>
                <p className='pair-value'>
                    {getDateDMY(shipmentDetails.PromisedDate)} 
                </p>
            </div>
        </div>
        <div className='divider'/>
        <div className="flex flex-col justify-center gap-[30px] md:gap-[50px] pt-[30px] md:pt-[30px] px-5">
            <div className='w-full flex flex-row'>
                <div className={getShipmentBarStatusClass()}/>
                <div className={`w-full success h-2 ${getShipmentDetailsStatusClass()}-background self-center`} />
                <div className={getShipmentBarStatusClass()}/>
                <div className={`w-full success h-2 ${getShipmentDetailsStatusClass()}-background self-center`}/>
                <div className={getShipmentBarStatusClass()} />
                <div className={`w-full success h-2 ${getShipmentDetailsStatusClass()}-background self-center`}/>
                <div className={getShipmentBarStatusClass(4)}/>
            </div>
            <div className='w-full flex flex-row justify-between'>
                <p className='status-bar-text'>{t(`transitStatus.${TransitEventsState.TICKET_CREATED}`)}</p>
                <p className='status-bar-text'>{t(`transitStatus.${TransitEventsState.PACKAGE_RECEIVED}`)}</p>
                <p className='status-bar-text'>{t(`transitStatus.${TransitEventsState.OUT_FOR_DELIVERY}`)}</p>
                <p className='status-bar-text'>{t(`transitStatus.${TransitEventsState.DELIVERED}`)}</p>
            </div>
        </div>
    </div>
  );
};

export default TrackerCard;