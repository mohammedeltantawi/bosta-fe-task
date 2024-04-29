interface NextWorkingDayModel {
    dayDate: string,
    dayName: string 
}

interface CurrentStatusModel {
    state: string,
    timestamp: string
}

interface TransitEventsModel {
    state: string,
    timeStamp: string,
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