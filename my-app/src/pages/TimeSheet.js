import { useState } from "react";
import Calender from "../components/organisms/calender/Calender";
import moment from "moment";
import Daily from "../components/organisms/daily/Daily";
import * as ReportService from '../services/reports/ReportsServices'
import * as ProjectsServices from '../services/projects/ProjectsServices'
import * as ClientsServices from '../services/clients/ClientsServices'
import * as mock from '../mock/mock'

function TimeSheet(props) {
  const [showDaily, setShowDaily] = useState(false);
  const [dateOpened, setDateOpened] = useState();

	const daySlectsParent = (childdata) => {
		setDateOpened(childdata)
    setShowDaily(!showDaily)
	}

  const backToMonthsParent = () => {
    setShowDaily(false)
	}

  
  const getMonthlyWork = (date) => {
    return ReportService.getMonthlyWork(moment(date).format('YYYY-MM-DD').toString());
  }

  const getMonthlyHours = (date) => {
    return ReportService.getMonthlyHours(moment(date).format('YYYY-MM-DD').toString());
  }
  
  const projectsGet = () => {
    return ProjectsServices.getAll();
  }

  const clientsGet = () => {
    return ClientsServices.getAll();
  }

  const categoriesGet = () => {
    return ReportService.getCategories();
  }

  const getTotalTimeForDay = (date) => {
    return ReportService.getTotalTime(mock.LOGED_IN, -1, -1, -1, date.format('YYYY-MM-DD').toString(), date.format('YYYY-MM-DD').toString());
  }

  const getReportsForDate = (date) => {
    return ReportService.filterReports(mock.LOGED_IN, -1, -1, -1, date.format('YYYY-MM-DD').toString(), date.format('YYYY-MM-DD').toString());
  }

  const getData = (data) => {
    alert(JSON.stringify(data));
  }

    return (
      <>
        <div class="container">
          <div class="wrapper">
            <section class="content">
            <h2><i class="ico timesheet"></i>TimeSheet</h2>
            {

              showDaily ? 
              <Daily getData={getData} getReportsForDate={getReportsForDate} getTotalTimeForDay={getTotalTimeForDay} projectsGet={projectsGet} clientsGet={clientsGet} categoriesGet={categoriesGet} dateOpened={dateOpened} backToMonthsParent={backToMonthsParent}/>:
              <Calender getMonthlyWork={getMonthlyWork} getMonthlyHours={getMonthlyHours} daySlectsParent={daySlectsParent}></Calender>
            }
            </section>
          </div>
  
        </div>
      </>
    )
  };
  
  export default TimeSheet;