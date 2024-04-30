import { useTranslation } from 'react-i18next';
import { ShipmentTrackResponse } from '../../models/shipment-track-response.model';
import './delivery-time-card.style.css';

const DeliveryTimeCard = () => {
    const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 w-full md:w-1/3">
        <p className='card-title'>{t('deliveryTimeCard.deliveryAddress')}</p>
        <div className='grey-background flex border border-solid   rounded-lg p-5 h-[150px] items-center'>
            <p>{t('deliveryTimeCard.address')}</p>
        </div>
        <div className='flex border border-solid   rounded-lg p-5 h-[150px] items-center'>
            <div className='flex flex-col gap-2 w-2/3 items-center'>
                <p className="report-text">{t('deliveryTimeCard.problemQuestion')}</p>
                <div className='h-[50px] w-full flex cursor-pointer rounded-lg red-background items-center justify-center'>
                    <p className='report-text text-white'>
                    {t('deliveryTimeCard.reportButtonTitle')}
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DeliveryTimeCard;