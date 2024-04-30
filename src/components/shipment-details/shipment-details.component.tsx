import { t } from 'i18next';
import { ShipmentTrackResponse } from '../../models/shipment-track-response.model';
import { getDateNumbers, getTime } from '../../services/global-functions';

interface TrackerCardProps {
    shipmentDetails: ShipmentTrackResponse;
}
const ShipmentDetails = ({ shipmentDetails }: TrackerCardProps) => {
  
  const rowClass="flex flex-row h-auto items-center p-5 border-solid border-b "
  const rowCell= "w-1/4 text-wrap"
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
            <p className={rowCell}>
              {t(`transitStatus.${event.state}`)}
            </p>
          </div>)
         })
        }

      </div>
    </div>
  );
};

export default ShipmentDetails;