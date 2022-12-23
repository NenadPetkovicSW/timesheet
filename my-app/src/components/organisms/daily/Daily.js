import { useRef, useState, useEffect } from 'react';
import '../../../assets/css/style.css'
import HorizontalDatePicker from '../../molecules/horizontal-date-picker/HorizontalDatePicker';
import Table from '../../molecules/table/Table';

function Daily(props) {

  const projectsGet = () => {
    return props.projectsGet();
  }

  const clientsGet = () => {
    return props.clientsGet();
  }

  const categoriesGet = () => {
    return props.categoriesGet();
  }

  const getTotalTimeForDay = (date) => {
    return props.getTotalTimeForDay(date);
  }

  const getReportsForDate = (date) => {
    return props.getReportsForDate(date);
  }

  const [dateOpened, setDateOpened] = useState(props.dateOpened)
  const [dateToDisplay, setDateToDisplay] = useState(props.dateOpened)
  const header = ['Clinet', 'Project', 'Category', 'Description', 'Time', 'Over Time'];
  const column = ['client', 'project', 'category', 'description', 'time', 'overTime'];
  const restrictionType = ['', '', '', '', 'numbersOnly', 'numbersOnly'];
  const isRequired = [true , true, true, false, true, false]
  const [reports, setReports] = useState([]);
  const [totalTime, setTotalTime] = useState(getTotalTimeForDay(dateToDisplay));

  const [selectData, setSelectData] = useState(
    {
      project: projectsGet(),
      client: clientsGet(),
      category: categoriesGet()
    }
  );

  function backToMonths(e) {
    props.backToMonthsParent(e);
  }

  const getDateToDisplay = (date) => {
    setDateToDisplay(date)
  }

  const getData = (data) => {
    props.getData(data)
  }

  useEffect(() => {
    setReports(getReportsForDate(dateToDisplay));
    setSelectData({
      project: projectsGet(),
      client: clientsGet(),
      category: categoriesGet()
    })
    setTotalTime(getTotalTimeForDay(dateToDisplay))
  }, [props, dateToDisplay])

  return (
    <>
      <HorizontalDatePicker getTotalTimeForDay={getTotalTimeForDay} getDateToDisplay={getDateToDisplay} dateOpened={dateOpened} activeDate={dateToDisplay} />
      <Table getData={getData} selectData={selectData} isRequired={isRequired} restrictionType={restrictionType} tableData={reports} column={column} type="report" header={header} />
      <div class="total">
        <a onClick={backToMonths}>back to monthly view</a>
        <span>Total hours: <em>{totalTime}</em></span>
      </div>
    </>
  );
}

export default Daily;