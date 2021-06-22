import moment from "moment";

export const defaultDateFormat = "DD/MM/YYYY";

export const workingDays = [1, 2, 3, 4, 5, 6]; //Lun-Sab

export const workingHours = [1, 2, 3, 4, 5, 6];

export const examinations = [
  {
    id: 1,
    date: moment().hour(15).minute(0).valueOf(),
    name: "holter"
  },
  {
    id: 1,
    date: moment().hour(18).minute(0).valueOf(),
    name: "ecg"
  }
];

export const getExaminations = async () => {
  const response = await fetch(
    "http://localhost:3000/api/examinations"
  ).then((response) => response.json());

  console.log(response.data);
  const events = response.data;

  return formatEvents(events);
};

const formatEvents = (events: any[] = []) => {
  const formatted = events.map((ev) => {
    return {
      title: "All-day event",
      start: moment(ev.start_date).valueOf(),
      end: moment(ev.end_date).valueOf()
    };
  });

  return formatted;
};
