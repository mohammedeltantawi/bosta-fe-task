import { t } from 'i18next';
import { TransitEventsState } from '../../enums/transit-events.enum';
import { ShipmentTrackResponse } from '../../models/shipment-track-response.model';
import { getDateNumbers, getTime } from '../../services/global-functions';
import "./shipment-details.style.css";
interface TrackerCardProps {
    shipmentDetails: ShipmentTrackResponse;
}
const ShipmentDetails = ({ shipmentDetails }: TrackerCardProps) => {
  
  const rowClass="flex flex-row h-auto items-center p-5 border-solid border-b";
  const rowCell= "w-1/4 text-wrap";

  const getShipmentDetailsStatusClass= (step?: number): string => {
    switch(shipmentDetails.CurrentStatus.state) {
        case (TransitEventsState.DELIVERED): return "success-color";
        case (TransitEventsState.CANCELLED): return"cancelled-color";
        default: return "waiting-color";
    }
}
  return (
    <div className="flex flex-col gap-4 w-full md:w-2/3">
      <p className='card-title'>{t('shipmentDetails.shipmentDetails')}</p>
      <div className='flex flex-col border border-solid   rounded-lg'>
        <div className={`${rowClass} grey-background`}>
          <p className={`${rowCell} first-row-text-color`}>
            {t('shipmentDetails.branch')}
          </p>
          <p className={`${rowCell} first-row-text-color`}>
            {t('shipmentDetails.date')}
          </p>
          <p className={`${rowCell} first-row-text-color`}>
            {t('shipmentDetails.time')}
          </p>
          <p className={`${rowCell} first-row-text-color`}>
            {t('shipmentDetails.details')}
          </p>
        </div>
        {
         shipmentDetails.TransitEvents.map((event) => {
          return (<div className={`${rowClass}`}>
            <p className={rowCell}>
              {event.hub ?? ""}
            </p>
            <p className={rowCell}>
              {getDateNumbers(event.timestamp)}
            </p>
            <p className={rowCell}>
              {getTime(event.timestamp)}
            </p>
            <div className={`flex flex-col gap-1 ${rowCell}`}> 
              <p>
                {t(`transitStatus.${event.state}`)}
              </p>
              <p className={`reason-text ${getShipmentDetailsStatusClass()}`}>
                {t(`${event.reason ?? ""}`)}
              </p>
            </div>
          </div>)
         })
        }

      </div>
    </div>
  );
};

export default ShipmentDetails;