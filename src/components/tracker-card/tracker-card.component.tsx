import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { TransitEventsState } from '../../enums/transit-events.enum';
import { ShipmentTrackResponse } from '../../models/shipment-track-response.model';
import { getDateDayDateTime, getDateDMY } from '../../services/global-functions';
import "./tracker-card.style.css";
import { FaTruck, FaCheck, FaCheckToSlot  } from "react-icons/fa6";
import i18n from '../../i18n';

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

    const getShipmentDetailsStatusClass= (step?: number): string => {
        switch(shipmentDetails.CurrentStatus.state) {
            case (TransitEventsState.DELIVERED): return "success";
            case (TransitEventsState.CANCELLED): return step===3 ? "grey":  "cancelled";
            default: return step===3 ? "grey": "waiting";
        }
    }

    const getShipmentBarStatusClass= (step?: number): string => {
        let result = "";
        let width = "w-4 h-4 md:w-6 md:h-6";
        if (shipmentDetails.CurrentStatus.state === TransitEventsState.DELIVERED) {
            result = "success-background"
        } else {
            if (step === 4) {
                result = "white-background border border-solid"
                width = "w-10 h-10 md:w-[50px] md:h-[50px]"
            } else {
                if (shipmentDetails.CurrentStatus.state === TransitEventsState.CANCELLED) {
                    if (step === 3) width = "w-10 h-10 md:w-[50px] md:h-[50px]" 
                    result = "cancelled-background"
                } else {
                    if (step === 3) width = "w-10 h-10 md:w-[50px] md:h-[50px]"
                    result = "waiting-background"
                }
            }
        }
        return `rounded-full ${result} ${width} items-center justify-center flex`
    }
  return (
    <div className="w-[95%] md:w-[84%] py-5 border border-solid rounded-lg">
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
        <div className="flex flex-col justify-center gap-5 pt-[30px] md:pt-[30px] px-5">
            <div className='w-full flex flex-row justify-center items-center'>
                <div className={getShipmentBarStatusClass()}><FaCheck color='white'/></div>
                <div className={`w-[30%] success h-2 ${getShipmentDetailsStatusClass()}-background self-center`} />
                <div className={getShipmentBarStatusClass()}><FaCheck color='white'/></div>
                <div className={`w-[30%] success h-2 ${getShipmentDetailsStatusClass()}-background self-center`}/>
                <div className={getShipmentBarStatusClass(3)}>{getShipmentDetailsStatusClass() === "success" ? <FaCheck color='white'/> : <FaTruck size={25} className={i18n.language === "ar" ? "reverse": ""} color='white'/> }</div>
                <div className={`w-[30%] success h-2 ${getShipmentDetailsStatusClass(3)}-background self-center`}/>
                <div className={getShipmentBarStatusClass(4)}>{getShipmentDetailsStatusClass() === "success" ? <FaCheck color='white'/> : <FaCheckToSlot size={25} color={getShipmentDetailsStatusClass() === "success" ? "white": "#E5E7Eb"}/> }</div>
            </div>
            <div className='w-full flex flex-row justify-between'>
                <p className='status-bar-text'>{t(`transitStatus.${TransitEventsState.TICKET_CREATED}`)}</p>
                <p className='status-bar-text'>{t(`transitStatus.${TransitEventsState.PACKAGE_RECEIVED}`)}</p>
                <p className='status-bar-text md:pe-[4%]'>{t(`transitStatus.${TransitEventsState.OUT_FOR_DELIVERY}`)}</p>
                <p className='status-bar-text'>{t(`transitStatus.${TransitEventsState.DELIVERED}`)}</p>
            </div>
        </div>
    </div>
  );
};

export default TrackerCard;