import { useState, useEffect } from 'react';
import '../../../assets/css/style.css'

function Day(props) {
    const [date, setDate] = useState(props.date || "Date");
    const [totalTime, setTotalTime] = useState(props.totalTime);
    const [dayInAWeek, setDayInAWeek] = useState(props.dayInAWeek || "DayInAWeek")
    const [isActive, setIsActive] = useState(props.isActive || false)

    useEffect(()=>{
        setDate(props.date || "Date")
        setTotalTime(props.totalTime)
        setDayInAWeek(props.dayInAWeek || "DayInAWeek")
        setIsActive(props.isActive || false)
    },[props])

    function onDayClick(e) {
        props.onDayClick(date);
      }
    

    return (
        <>
            <li onClick={onDayClick} className={isActive ? "active" : "not"}>
                <a href="javascript:;" >
                    <b>{date.format('MMM DD')}</b>
                    <i>{totalTime}</i>
                    <span>{dayInAWeek.format('dddd')}</span>
                </a>
            </li>
        </>
    );
}

export default Day;