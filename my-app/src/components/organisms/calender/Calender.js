import FullCalendar, { CalendarApi } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import momentPlugin from '@fullcalendar/moment'
import { useRef, useState, useEffect } from 'react';
import '../../../assets/css/style.css'
import moment from 'moment';

// TODO: Create it like a tabele ?
function Calender(props) {
  const calendar= useRef(null);

  const getMonthlyWork = (date) => {
    return props.getMonthlyWork(moment(date).format('YYYY-MM-DD').toString());
  }

  const getMonthlyHours = (date) => {
    return props.getMonthlyHours(moment(date).format('YYYY-MM-DD').toString());
  }

  const [events, setEvents] = useState(getMonthlyWork(Date.now()));
  const [click, setClick] = useState(false);
  const [totalTime, setTotalTime] = useState(getMonthlyHours(Date.now()));

  useEffect(() => {
    setEvents(getMonthlyWork(calendar.current?.getApi().getDate()));
    setTotalTime(getMonthlyHours(calendar.current?.getApi().getDate()));
  }, [click])

  function returnDate(e){
    props.daySlectsParent(moment(e.dateStr,'YYYY-MM-DD'))
  }

  return (
    <>
    <div className="App">
      <FullCalendar
        titleFormat= {'MMMM, YYYY'}
        ref={calendar}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, momentPlugin]}
        initialView="dayGridMonth"
        customButtons={{
          previousMonthButton: {
              text: '< previous month',
              click: function() {
                calendar.current.getApi().prev();
                setClick(!click);
              }
          },
          nextMonthButton: {
            text: 'next month >',
            click: function() {
              calendar.current.getApi().next();
              setClick(!click);
            }
        }
        }}
        headerToolbar={{
          left: 'previousMonthButton',
          center: 'title',
          right: 'nextMonthButton'
        }}
        events={events}
        eventDisplay="background"
        nowIndicator
        dateClick={returnDate}
        validRange={{end: Date.now()}}
        showNonCurrentDates={false}
        dayMaxEventRows={false}
        firstDay={1}
      />
    </div>
    <br />
    <div class="total">
         <span>Total hours: <em>{totalTime}</em></span>
    </div>
    </>
  );
}

export default Calender;