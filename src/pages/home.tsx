import { useEffect } from "react";
import { useQuery } from "react-query";
import { trackShipment } from "../services/shipments";


const PackageTracking = () => {
  const { data: shipmentDetails } = useQuery(
    [],
    () =>
      trackShipment("7234258"),
  );

  return (
    <div>
        <p>{shipmentDetails?.CurrentStatus.state}</p>
    </div>
  );
};

export default PackageTracking;
