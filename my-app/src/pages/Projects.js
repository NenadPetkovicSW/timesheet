import '../assets/css/style.css';
import Alpha from '../components/atoms/alpha/Alpha';
import Input from '../components/atoms/inputs/Input';
import CreateNewForm from '../components/molecules/forms/Form';
import Pagination from '../components/organisms/pagination/Pagination';
import CustomPopup from '../components/organisms/popup/CustomPopup';
import { useEffect, useState } from 'react';
import * as ProjectAxios from '../services/axios/projects/Projects'
import * as UsersAxios from '../services/axios/users/Users'
import * as ClientAxios from '../services/axios/clients/Client'

function Projects(props) {
	const [visibility, setVisibility] = useState(false);
	const [projects, setProjects] = useState([]);
	const [clients, setClients] = useState([]);
	const [users, setUsers] = useState([]);

	const [deactivate, setDeactivate] = useState(true);

	const [projectsLetters, setProjectsLetter] = useState([]);
	const [filterData, setFilterData] = useState({ letter: '', searchStr: '', page: 0 })
	const [searchValue, setSearchValue] = useState("");

	const [nmberOfPages, setNumberOfPages] = useState(0);


	useEffect(() => {

		UsersAxios.getAll()
		.then(response => {
		  setUsers(response.data);
		  console.log(response.data);
			  })
		.catch(e => {
			console.log(e);
		});

		ClientAxios.getAll()
		.then(response => {
			setClients(response.data);
		  console.log(response.data);
			  })
		.catch(e => {
			console.log(e);
		});

		ProjectAxios.getAlpha()
		  .then(response => {
			let array = [];
			
			response.data.forEach(element => {
				array.push(element)
			});

			setProjectsLetter(array);
			console.log(response.data);
				})
		  .catch(e => {
			  console.log(e);
		  });

		  ProjectAxios.getPage()
		  .then(response => {

			setNumberOfPages(response.data.totalPages);
			console.log(response.data);
				})
		  .catch(e => {
			  console.log(e);
		  });

		  ProjectAxios.get(filterData.letter,filterData.searchStr,filterData.page)
		  .then(response => {

			setProjects(response.data.projects);
			console.log(response.data);
				})
		  .catch(e => {
			  console.log(e);
		  });
	  }, []);
	  


	useEffect(() => {
		ProjectAxios.get(filterData.letter,filterData.searchStr,filterData.page)
		  .then(response => {

			setProjects(response.data.projects);
			console.log(response.data);
				})
		  .catch(e => {
			  console.log(e);
		  });
	}, [nmberOfPages, filterData])


	useEffect(() => {
		ProjectAxios.get(filterData.letter,filterData.searchStr,filterData.page)
		.then(response => {

		  setNumberOfPages(response.data.totalPages);
		  console.log(response.data);
			  })
		.catch(e => {
			console.log(e);
		});	}, [filterData])




	const popupCloseHandler = () => {
		setVisibility(false);
	  };


	const letterToParent = (childdata) => {
		
		if(childdata == "")
		{
		setFilterData({ letter: "", searchStr: "", page: 0 })
		}
		else
		{
		setFilterData({ letter: childdata, searchStr: "", page: 0 })
		}
	}

	const searchStrToParent = (childdata) => {
		setDeactivate(!deactivate)
		if(childdata == "")
		{
		setFilterData({ letter: "", searchStr: "", page: 0 })
		}
		else
		{
		setFilterData({ letter: "", searchStr: childdata, page: 0 })
		}	}

	const pageToParent = (childdata) => {
		if (childdata > 0 && childdata <= nmberOfPages)
			setFilterData({ letter: filterData.letter, searchStr: filterData.searchStr, page: childdata - 1  })
		else {
			if(filterData.page + 1 < nmberOfPages)
			setFilterData({ letter: filterData.letter, searchStr: filterData.searchStr, page: (filterData.page == nmberOfPages ? filterData.page : filterData.page +1) })
		}
	}

	const dataInFormSend = (e) => {
		alert(JSON.stringify(e))
	}

	const dataInFormDelete = (e) => {
		alert(JSON.stringify(e))
	}

	return (
		<>
			<div class="container">
				<div class="wrapper">
					<section class="content">
						<h2><i class="ico team-member"></i>Projects</h2>
						<div class="grey-box-wrap reports ico-member">
							<a onClick={() => setVisibility(true)} href="script:;" class="link new-member-popup test">
								<span>Create new project</span>
							</a>
							<div class="search-page">
								<Input value={searchValue} searchStrToParent={searchStrToParent} inputType={"search"} />
							</div>
						</div>
						<Alpha deactivate={deactivate} letterToParent={letterToParent} letters={projectsLetters} />
						<Pagination dataInFormSend={dataInFormSend} dataInFormDelete={dataInFormDelete} pages={nmberOfPages} pageToParent={pageToParent} type="project" users={users} clients={clients} dataList={projects} />
						<CustomPopup
							onClose={popupCloseHandler}
							show={visibility}
							title="Create new project"
							>
							<div class="new-member-inner">
								<CreateNewForm clients={clients} users={users} type="project" />
							</div>
						</CustomPopup>
					</section>
				</div>

			</div>
		</>
	)
};
export default Projects;