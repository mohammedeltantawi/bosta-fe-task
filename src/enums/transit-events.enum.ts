export enum TransitEventsState {
    TICKET_CREATED= "TICKET_CREATED",
    PACKAGE_RECEIVED= "PACKAGE_RECEIVED",
    IN_TRANSIT= "IN_TRANSIT",
    NOT_YET_SHIPPED= "NOT_YET_SHIPPED",
    OUT_FOR_DELIVERY= "OUT_FOR_DELIVERY",
    WAITING_FOR_CUSTOMER_ACTION= "WAITING_FOR_CUSTOMER_ACTION",
    DELIVERED= "DELIVERED",
    CANCELLED= "CANCELLED",
    DELIVERED_TO_SENDER= "DELIVERED_TO_SENDER"
}