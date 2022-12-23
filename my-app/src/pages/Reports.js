import { useState, useEffect } from 'react';
import '../assets/css/style.css';
import Button from '../components/atoms/buttons/Button';
import Filter from '../components/molecules/filter/Filter';
import Table from '../components/molecules/table/Table';
import * as ClientServices from '../services/clients/ClientsServices';
import * as ProjectServices from '../services/projects/ProjectsServices';
import * as ReportsServices from '../services/reports/ReportsServices';
import * as UserServices from '../services/users/UsersServices';

function Reports(props) {
	const [reports, setReports] = useState([]);
	const [projects, setProjects] = useState(ProjectServices.getAll());
	const [users, setUsers] = useState(UserServices.getAll());
	const [categories, setCategories] = useState(ReportsServices.getCategories());
	const [clients, setClients] = useState(ClientServices.getAll());

	const column = ['date', 'worker', 'project', 'client', 'category', 'description', 'time', 'overTime'];
	const header = ['Date', 'Team member', 'Projects', 'Clinet', 'Categories', 'Description', 'Time', 'Over Time'];

	const [filterData, setFilterData] = useState({});
	const [filterClient, setFilterClient] = useState({});

	const filterToParent = (childdata) => {
		setFilterData(childdata)
		setReports(ReportsServices.filterReports(childdata.userId, childdata.clientId, childdata.projectId, childdata.category, childdata.startDate, childdata.endDate));
	}

	const filterSlectsParent = (childdata) => {
		setFilterClient(childdata)
		setClients(ReportsServices.filterClients(childdata.userId, childdata.projectId, childdata.category))
		setProjects(ReportsServices.filterProjects(childdata.userId, childdata.clientId, childdata.category))
		setUsers(ReportsServices.filterUsers(childdata.clientId, childdata.projectId, childdata.category))
		setCategories(ReportsServices.filterCategory(childdata.userId, childdata.clientId, childdata.projectId))
	}

	return (
		<>
			<div class="container">
				<div class="wrapper">
					<section class="content">
						<h2><i class="ico report"></i>Reports</h2>
						<div class="grey-box-wrap reports">
							<Filter filterToParent={filterToParent} filterSlectsParent={filterSlectsParent} hide={['id']} categories={categories} users={users} clients={clients} projects={projects} />
						</div>
						<Table tableData={reports} column={column} header={header} />
						<div class="total">
							<span>Report total: <em>{ReportsServices.getTotalTime(filterData.userId, filterData.clientId, filterData.projectId, filterData.category, filterData.startDate, filterData.endDate)}</em></span>
						</div>
						<div class="grey-box-wrap reports">
							<div class="btns-inner">
								<Button onClick={() => ReportsServices.printPDF(header,filterData.userId, filterData.clientId, filterData.projectId, filterData.category, filterData.startDate, filterData.endDate)} className="btn white" name="Print report" />
								<Button onClick={() => ReportsServices.exportPDF(header,filterData.userId, filterData.clientId, filterData.projectId, filterData.category, filterData.startDate, filterData.endDate)} className="btn white" name="Create PDF" />
								<Button onClick={() => ReportsServices.exportExcel(filterData.userId, filterData.clientId, filterData.projectId, filterData.category, filterData.startDate, filterData.endDate)} className="btn white" name="Export to excel" />
							</div>
						</div>
					</section>
				</div>

			</div>
		</>
	)
};
export default Reports;