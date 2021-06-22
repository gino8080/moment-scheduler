import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import itLocale from "@fullcalendar/core/locales/it";
import momentPlugin from "@fullcalendar/moment";
import { INITIAL_EVENTS } from "./event-utils";

const MyCalendar = ({ events = [] }) => {
  const handleDateSelect = (selectInfo: any) => {
    console.log("clickInfo", selectInfo);

    /*let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

   
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }*/
  };

  const handleEventClick = (clickInfo: any) => {
    console.log("clickInfo", clickInfo);
    /*if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }*/
  };

  const dayCellClassNames = ({ date, isPast }: any) => {
    // console.log({ date, isPast });
    //return classes + " ciao";
    if (isPast) return ["past"];
    return "";
  };

  const dateClick = (args: any) => {
    console.log("dateClick", args);
  };
  return (
    <div className="demo-app">
      {
        //this.renderSidebar()
      }
      <div className="demo-app-main">
        <FullCalendar
          locale={itLocale}
          timeZone="Europe/Rome"
          plugins={[
            //momentPlugin,
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            resourceTimelinePlugin
          ]}
          schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
          }}
          //initialView="resourceTimeline"
          //editable={true}
          //selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          //dayCellClassNames={dayCellClassNames}
          /*dayCellContent={function (args) {
              console.log(args);
              if (args.isPast) {
                return <div className="magicoo">{args.dayNumberText}</div>;
              }
            }}*/
          //weekends={this.state.weekendsVisible}
          //initialEvents={events} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          //eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          events={INITIAL_EVENTS}
          dateClick={dateClick}
          // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          initialView="timeGridWeek"
          //hiddenDays={[0]}
          /*businessHours={{
            // days of week. an array of zero-based day of week integers (0=Sunday)
            daysOfWeek: [1, 2, 3, 4, 5], // Monday - Thursday

            startTime: "08:00", // a start time (10am in this example)
            endTime: "19:00" // an end time (6pm in this example)
          }}*/
        />
      </div>
    </div>
  );
};

const renderEventContent = (eventInfo: any) => {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
};

export default MyCalendar;
