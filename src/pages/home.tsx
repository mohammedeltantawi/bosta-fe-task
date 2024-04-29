import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import DeliveryTimeCard from "../components/delivery-time-card/delivery-time-card.component";
import Navbar from "../components/navbar/navbar.component";
import ShippmentDetails from "../components/shippment-details/shippment-details.component";
import TrackerCard from "../components/tracker-card/tracker-card.component";
import { TransitEventsState } from "../enums/transit-events.enum";
import { ShipmentTrackResponse } from "../models/shipment-track-response.model";
import { trackShipment } from "../services/shipments";


const PackageTracking = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const { data: shipmentDetails, isLoading } = useQuery(
    [],
    () =>
      trackShipment(id ?? ""),
  );

  return (
    isLoading || !shipmentDetails ? 
      (<div>Loading... </div>) : 
      (
        <div className="w-full justify-center items-center flex flex-col gap-10" dir={i18n.language === "ar" ? "rtl": "ltr"}>
          <Navbar />
          <TrackerCard shipmentDetails={shipmentDetails}/>
          <div className="w-[95%] md:w-[84%] flex flex-col md:flex-row gap-5">
            <ShippmentDetails shipmentDetails={shipmentDetails}/>
            <DeliveryTimeCard shipmentDetails={shipmentDetails}/>
          </div>
        </div>
      )
  );
};

export default PackageTracking;
