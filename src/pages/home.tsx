import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import DeliveryTimeCard from "../components/delivery-time-card/delivery-time-card.component";
import Navbar from "../components/navbar/navbar.component";
import ShipmentDetails from "../components/shipment-details/shipment-details.component";
import TrackerCard from "../components/tracker-card/tracker-card.component";
import { trackShipment } from "../services/shipments";
import CircularProgress from '@mui/material/CircularProgress';

const PackageTracking = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
    const { data: shipmentDetails, refetch, isFetching } = useQuery(
      ['shipment-details'],
      () =>
        trackShipment(id ?? ""),
    );

    useEffect(()=> {
        refetch();
    },[id, refetch]);

  return (
    isFetching || !shipmentDetails ? 
      (<div className="flex items-center justify-center w-full h-full"><CircularProgress color="error" size={100} /> </div>) : 
      (
        <div className="w-full justify-center items-center flex flex-col gap-10" dir={i18n.language === "ar" ? "rtl": "ltr"}>
          <Navbar />
          <TrackerCard shipmentDetails={shipmentDetails}/>
          <div className="w-[95%] md:w-[84%] flex flex-col md:flex-row gap-5">
            <ShipmentDetails shipmentDetails={shipmentDetails}/>
            <DeliveryTimeCard />
          </div>
        </div>
      )
  );
};

export default PackageTracking;
