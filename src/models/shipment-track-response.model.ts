import { TransitEventsState } from "../enums/transit-events.enum"

interface NextWorkingDayModel {
    dayDate: string,
    dayName: string 
}

interface CurrentStatusModel {
    state: TransitEventsState,
    timestamp: string
}

interface TransitEventsModel {
    state: TransitEventsState,
    timestamp: string,
    hub?: string,
    reason?: string
}

export interface ShipmentTrackResponse {
    provider: string,
    CurrentStatus: CurrentStatusModel,
    PromisedDate: string,
    TrackingNumber: string,
    TrackingURL: string,
    SupportPhoneNumbers: string[],
    TransitEvents: TransitEventsModel[],
    CreateDate: string,
    isEditableShipment: boolean,
    nextWorkingDay: NextWorkingDayModel[]
}