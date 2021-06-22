import "./styles.css";
import moment, { Moment } from "moment";
import { defaultDateFormat, getExaminations, workingDays } from "./Scheduler";
import { Button, Card, DatePicker, Space, TimePicker } from "antd";
import MyCalendar from "./Calendar";
import { useEffect, useState } from "react";
export const today = moment();
function disabledDate(current: Moment) {
  // Can not select days before today and today

  if (current) {
    const day = current.day();
    if (!workingDays.includes(day)) return true;

    if (current.isBefore(today)) return true;
  }
  return false;
}

function disabledHours() {
  return [0, 1, 2, 3, 4, 5, 6, 7, 20, 21, 22, 23];
}

const dateOpts = {
  format: defaultDateFormat,
  showTime: false,

  disabledDate: disabledDate
};

const timeOpts = {
  format: "HH:mm",

  minuteStep: 15,
  //disabledHours: disabledHours,
  hideDisabledOptions: true
};
//https://fullcalendar.io/license
export default function App() {
  const [events, setEvents] = useState([]);

  const getExams = async () => {
    const exams = await getExaminations();

    setEvents(exams);
  };
  useEffect(() => {
    getExams();
  }, []);

  return (
    <Card className="App">
      <br />
      <br />
      <Button onClick={getExaminations}>getExaminations</Button>
      <br />

      <MyCalendar events={events} />

      {/*<div>
        <Space>
          <DatePicker {...dateOpts} />
          <TimePicker {...timeOpts} />
        </Space>
      </div>
       */}
    </Card>
  );
}
