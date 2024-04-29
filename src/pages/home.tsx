import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/navbar.component";
import TrackerCard from "../components/tracker-card/tracker-card.component";
import { TransitEventsState } from "../enums/transit-events.enum";
import { ShipmentTrackResponse } from "../models/shipment-track-response.model";
import { trackShipment } from "../services/shipments";


const PackageTracking = () => {
  const { id } = useParams();

  const { data: shipmentDetails, isLoading } = useQuery(
    [],
    () =>
      trackShipment(id ?? ""),
  );

  return (
    isLoading || !shipmentDetails ? 
      (<div>Loading... </div>) : 
      (
        <div className="w-full justify-center items-center flex flex-col gap-10">
          <Navbar />
          <TrackerCard shipmentDetails={shipmentDetails}/>
        </div>
      )
  );
};

export default PackageTracking;
