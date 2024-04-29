import { END_POINTS } from "../constants/endpoints";
import { ShipmentTrackResponse } from "../models/shipment-track-response.model";
import client from "./client";

export async function trackShipment(id: string): Promise<ShipmentTrackResponse> {
	const result = await client
		.get({
			url: `${END_POINTS.SHIPMENT_TRACK}/${id}`
		})
		.then((res) => {
            return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
    return result;
}