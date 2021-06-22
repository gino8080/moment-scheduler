import moment from "moment";

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export function createEventId() {
  return String(eventGuid++);
}

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00"
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: moment().add(1, "d").hour(15).minute(0).valueOf(),
    end: moment().add(1, "d").hour(16).minute(0).valueOf()
  }
];
