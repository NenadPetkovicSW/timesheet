import exportFromJSON from 'export-from-json';
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as mock from '../../mock/mock';
import * as ProjectService from '../projects/ProjectsServices';
import * as UserService from '../users/UsersServices';
import * as ClientService from '../clients/ClientsServices'
import moment from 'moment'

export const getCategories = () => {
  return mock.CATEGORY_LIST;
}

export const getAll = () => {
  return mock.WorkTask_logical;
}

export const getById = (id) => {
  return (getAll().filter(c =>
      (c.id == id))
  )
}

export const getMonthlyHours = (monthDate) => {
  let monthlyWorks = getMonthlyWork(monthDate)
  let totalTime = 0;
  monthlyWorks.map((work, index) => {
    var str = work.title;
    //alert(Number((str.split(" ").pop())));

    totalTime += Number((str.split(" ").pop()));
  })
  return totalTime;
}

export const getMonthlyWork = (monthDate) => {
  let userId = UserService.getLogedUser();

  let now = new Date(moment(monthDate).format('YYYY-MM-DD'));

  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  
  var start = new Date(moment(firstDay).format('YYYY-MM-DD').toString());
  var end = new Date(moment(lastDay).format('YYYY-MM-DD').toString());

  var monthlyWorkList = [];
  let ids = 0;

  var loop = new Date(start)
  while (loop <= end) {
    let reports = filterReports(userId, -1, -1, -1, moment(new Date(loop)).format('YYYY-MM-DD').toString(), moment(new Date(loop)).format('YYYY-MM-DD').toString())
    let totalTime = 0;
    reports.map((data, index) => {
      totalTime += data.time + data.overTime;
    })

    let color = "white";
    if( totalTime > 7.5)
    {
      color = "green";
    }
    else if(totalTime != 0)
    {
      color = "red";
    }

    let monthlyWork = { 
        id: ids,
        title: 'Hours: ' + totalTime, 
        start: moment(new Date(loop)).format('YYYY-MM-DD').toString(),
        color: color
      };

      monthlyWorkList.push(monthlyWork);

    ids = ids + 1;
    var newDate = loop.setDate(loop.getDate() + 1);
    loop = new Date(newDate);
  }

  return monthlyWorkList
}


export const getTotalTime = (userId, clientId, projectId, category, startDate, endDate) => {
  let data = filterReports(userId, clientId, projectId, category, startDate, endDate)
  let totalTime = 0;
  data.map((data, index) => {
    totalTime += data.time + data.overTime;
  })
  return totalTime;
}

export const filterReports = (userId, clientId, projectId, category, startDate, endDate) => {
  if(startDate==null)
  {
    startDate = "";
  }
  if(endDate==null)
  {
    endDate = "";
  }
  return (getAll().filter(r =>
        (
          (r.worker.id == Number.parseInt(userId) ||  Number.parseInt(userId) == -1) &&
          (r.client.id == Number.parseInt(clientId) ||  Number.parseInt(clientId) == -1) &&
          (r.project.id == Number.parseInt(projectId) ||  Number.parseInt(projectId) == -1) &&
          (r.category == category ||  Number.parseInt(category) == -1) &&
          (Date.parse(r.date) >= Date.parse(startDate) ||  startDate == "") &&
          (Date.parse(r.date) <= Date.parse(endDate) ||  endDate == "")
        ))
    )
}

// FILTER CLIENT
const reportClientCheck = (reports, c) =>{
  for(var i=0; i<reports.length; i++)
  {
    if(reports[i].client.id == c.id) 
      return true;
  }
  return false
}
export const filterClients = (userId, projectId, category) => {
  let reports = filterReports(userId, "-1", projectId, category, "", "");
  return ClientService.getAll().filter( c => (
    ( reportClientCheck(reports,c))
  )
  );
}

// FILTER PROJECT
const reportProjectsCheck = (reports, p) =>{
  for(var i=0; i<reports.length; i++)
  {
    if(reports[i].project.id == p.id) 
      return true;
  }
  return false
}
export const filterProjects = (userId, clientId, category) => {
  let reports = filterReports(userId, clientId, "-1", category, "", "");
  return ProjectService.getAll().filter( p => (
    ( reportProjectsCheck(reports,p))
  )
  );
}

// FILTER USERS
const reportUsersCheck = (reports, u) =>{
  for(var i=0; i<reports.length; i++)
  {
    if(reports[i].worker.id == u.id) 
      return true;
  }
  return false
}
export const filterUsers = (clientId, projectId, category,) => {
  let reports = filterReports("-1", clientId, projectId, category, "", "");
  return UserService.getAll().filter( u => (
    ( reportUsersCheck(reports, u))
  )
  );
}

// FILTER CATEGORIES
const reportCategoryCheck = (reports, c) =>{
  for(var i=0; i<reports.length; i++)
  {
    if(reports[i].category == c) 
      return true;
  }
  return false
}
export const filterCategory = (userId, clientId, projectId) => {
  let reports = filterReports(userId, clientId, projectId, "-1", "", "");
  return getCategories().filter( c => (
    ( reportCategoryCheck(reports, c))
  )
  );
}

export const exportPDF = (header, userId, clientId, projectId, category, startDate, endDate) => {
  var dataOut = filterReports(userId, clientId, projectId, category, startDate, endDate);
  const unit = "pt";
  const size = "A4"; // Use A1, A2, A3 or A4
  const orientation = "portrait"; // portrait or landscape

  const marginLeft = 40;
  const doc = new jsPDF(orientation, unit, size);

  doc.setFontSize(15);

  const title = "Report";
  const headers = [header];
  const data = dataOut.map(elt => [elt.date, elt.worker.name, elt.project.name, elt.client.name, elt.category, elt.description, elt.time, elt.overTime]);

  let content = {
    startY: 50,
    head: headers,
    body: data
  };

  doc.text(title, marginLeft, 40);
  doc.autoTable(content);
  doc.save("report.pdf")
}

export const printPDF = (header, userId, clientId, projectId, category, startDate, endDate) => {
  var dataOut = filterReports(userId, clientId, projectId, category, startDate, endDate);
  const unit = "pt";
  const size = "A4"; // Use A1, A2, A3 or A4
  const orientation = "portrait"; // portrait or landscape

  const marginLeft = 40;
  const doc = new jsPDF(orientation, unit, size);

  doc.setFontSize(15);
  const title = "Report";
  const headers = [header];

  const data = dataOut.map(elt => [elt.date, elt.worker.name, elt.project.name, elt.client.name, elt.category, elt.description, elt.time, elt.overTime]);

  let content = {
    startY: 50,
    head: headers,
    body: data
  };

  doc.text(title, marginLeft, 40);
  doc.autoTable(content);
  doc.autoPrint();
  doc.output('dataurlnewwindow');
}

export const exportExcel = (userId, clientId, projectId, category, startDate, endDate) => {
  var dataOut = filterReports(userId, clientId, projectId, category, startDate, endDate);
  const data = dataOut.map(elt => [elt.date, elt.worker.name, elt.project.name, elt.client.name, elt.category, elt.description, elt.time, elt.overTime]);
  const fileName = 'report'
  const exportType = 'xls'
  exportFromJSON({ data, fileName, exportType })
}