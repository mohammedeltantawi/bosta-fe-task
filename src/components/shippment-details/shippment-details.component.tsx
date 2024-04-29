import { t } from 'i18next';
import { ShipmentTrackResponse } from '../../models/shipment-track-response.model';
import { getDateNumbers, getTime } from '../../services/global-functions';

interface TrackerCardProps {
    shipmentDetails: ShipmentTrackResponse;
}
const ShippmentDetails = ({ shipmentDetails }: TrackerCardProps) => {
  const rowClass="flex flex-row bg-#4f5665 h-auto items-center p-5 border-solid border-b border-#4f5665"
  const rowCell= "w-1/4 text-wrap"
  return (
    <div className="flex flex-col gap-4 w-full md:w-2/3">
      <p>{t('shippmentDetails.shippmentDetails')}</p>
      <div className='flex flex-col border border-solid border-#4f5665  rounded-lg'>
        <div className={`${rowClass} bg TODO`}>
          <p className={rowCell}>
            {t('shippmentDetails.branch')}
          </p>
          <p className={rowCell}>
            {t('shippmentDetails.date')}
          </p>
          <p className={rowCell}>
            {t('shippmentDetails.time')}
          </p>
          <p className={rowCell}>
            {t('shippmentDetails.details')}
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
              {event.state}
            </p>
          </div>)
         })
        }

      </div>
    </div>
  );
};

export default ShippmentDetails;