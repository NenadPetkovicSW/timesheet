import { useEffect, useState } from 'react';
import '../../../assets/css/style.css'
import Day from '../../atoms/day/Day';
import moment from 'moment';

// TODO: add day to the end of the week just disabled
function HorizontalDatePicker(props) {

    const [dateOpened,setDateOpened] = useState(props.dateOpened || moment(Date.now()));
    const [currentDay, setCurrentDay] = useState(props.dateOpened || moment(Date.now()));
    const [monday, setMonday] = useState(getDayInAWeek(dateOpened,0));
    const [sunday, setSunday] = useState(getDayInAWeek(dateOpened,6));
    const [year, setYear] = useState(dateOpened.format('yyyy'))

    const [totalTime,setTotalTime] = useState(props.totalTime || 0);
    const [activeDate,setActivedate] = useState(props.activeDate || dateOpened);

    function getDayInAWeek(date, dayToAdd){
        date = new Date(date);
        var day = date.getDay(),
            diff = date.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday

        return moment(new Date(date.setDate(diff+dayToAdd)));
    }


    function week_of_month(date) {
    let prefixes = [1,2,3,4,5];
    return prefixes[0 | moment(date).date() / 7] 
    }

    function createDays(date){
        let dayList = []

        for(let i = 0;i<7;i++){
            if(getDayInAWeek(date,i).format('yyyy MM DD') <= currentDay.format('yyyy MM DD'))
            dayList.push(<Day onDayClick={onDayClick} isActive={activeDate.format('yyyy MM DD')==getDayInAWeek(date,i).format('yyyy MM DD')} date={getDayInAWeek(date,i)} totalTime={getTotalTimeForDay(getDayInAWeek(date, i))} dayInAWeek={getDayInAWeek(date, i)}/>);
        }
        return dayList;
    }

    const getTotalTimeForDay = (date) => {
        return props.getTotalTimeForDay(date)
    }

    const onDayClick = (childdata) => {
        props.getDateToDisplay(childdata);
        setActivedate(childdata)
	}

    function onNext(e){
        setDateOpened(monday.subtract(1, 'days'))
	}

    function onPrev(e){
        if(sunday.add(1, 'days') <= currentDay)
            setDateOpened(sunday.add(1, 'days'))
	}

    useEffect(()=>{
        setCurrentDay(moment(Date.now()));
        setMonday(getDayInAWeek(dateOpened,0));
        setSunday(getDayInAWeek(dateOpened,6));
        setYear(dateOpened.format('yyyy'))
    
        setTotalTime(props.totalTime || 0);
    },[props, dateOpened, activeDate])

    return (
        <>
            <div class="grey-box-wrap">
                <div class="top">
                    <a href="javascript:;" onClick={onNext} class="prev"> {"<"} previous week</a>
                    <span class="center">{monday.format('MMMM DD')} - {sunday.format('MMMM DD')}, {year} (week {week_of_month(dateOpened)})</span>
                    <a href="javascript:;" onClick={onPrev} class="next">next week {">"} </a>
                </div>
                <div class="bottom">
                    <ul class="days">
                        {
                            createDays(dateOpened)
                        }    
                    </ul>
                </div>
            </div>
        </>
    );
}

export default HorizontalDatePicker;