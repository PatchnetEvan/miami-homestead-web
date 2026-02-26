export interface OperatingHours {
    open: string;  // 24h format "HH:mm"
    close: string; // 24h format "HH:mm"
}

export interface Listing {
    name: string;
    address: string;
    accessNote?: string;
    hoursDisplay?: string;
    focus?: string;
    proximity?: number;
    hours?: {
        weekday: OperatingHours;
        saturday: OperatingHours;
        sunday: OperatingHours;
    };
}
