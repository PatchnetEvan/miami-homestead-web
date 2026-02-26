import { Listing } from "../types";

export const isOpenNow = (listing: Listing): boolean => {
    if (!listing.hours) return true; // If no hours are provided, we don't hide it

    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const currentTime = now.getHours() * 100 + now.getMinutes();

    let schedule = listing.hours.weekday;
    if (day === 6) schedule = listing.hours.saturday;
    if (day === 0) schedule = listing.hours.sunday;

    const openTime = parseInt(schedule.open.replace(':', ''));
    const closeTime = parseInt(schedule.close.replace(':', ''));

    // Handle businesses that are closed all day with "00:00" mapping
    if (schedule.open === "00:00" && schedule.close === "00:00") {
        return false;
    }

    // Handles typical scenarios
    if (closeTime >= openTime) {
        return currentTime >= openTime && currentTime <= closeTime;
    } else {
        // Handles scenarios where hours might cross midnight (e.g. 11am to 2am)
        return currentTime >= openTime || currentTime <= closeTime;
    }
};
