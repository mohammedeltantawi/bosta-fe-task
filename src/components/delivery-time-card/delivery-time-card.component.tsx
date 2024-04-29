import { ShipmentTrackResponse } from '../../models/shipment-track-response.model';
import './delivery-time-card.style.css';

interface TrackerCardProps {
    shipmentDetails: ShipmentTrackResponse;
}
const DeliveryTimeCard = ({ shipmentDetails }: TrackerCardProps) => {

  return (
    <div className="flex flex-col gap-4 w-full md:w-1/3">
        <p>Deliver address</p>
        <div className='grey-background flex border border-solid border-#4f5665  rounded-lg p-5 h-[150px] items-center'>
            <p>Address</p>
        </div>
        <div className='flex border border-solid border-#4f5665  rounded-lg p-5 h-[150px] items-center'>
            <div className='flex flex-col gap-2 w-1/2 items-center'>
                <p className="report-text">Do you have a problem ?!</p>
                <div className='h-[50px] w-full flex cursor-pointer rounded-lg red-background items-center justify-center'>
                    <p className='report-text text-white'>
                        Report a problem
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DeliveryTimeCard;