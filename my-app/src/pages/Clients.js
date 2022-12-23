import { useEffect, useState } from 'react';
import '../assets/css/style.css';
import Alpha from '../components/atoms/alpha/Alpha';
import Input from '../components/atoms/inputs/Input';
import CreateNewForm from '../components/molecules/forms/Form';
import Pagination from '../components/organisms/pagination/Pagination';
import CustomPopup from '../components/organisms/popup/CustomPopup';
import * as ClientAxios from '../services/axios/clients/Client'
function Clients(props) {
	const [visibility, setVisibility] = useState(false);

	const [clients, setClients] = useState([]);

	const [clientLetters, setClientLetters] = useState([]);

	const [nmberOfPages, setNumberOfPages] = useState(0);

	const [searchValue, setSearchValue] = useState("");

	const [filterData, setFilterData] = useState({ letter: '', searchStr: '', page: 0 })

	const [deactivate, setDeactivate] = useState(true);

	useEffect(() => {
		ClientAxios.getAlpha()
		  .then(response => {
			let array = [];
			
			response.data.forEach(element => {
				array.push(element)
			});

			setClientLetters(array);
			console.log(response.data);
				})
		  .catch(e => {
			  console.log(e);
		  });

		  ClientAxios.getPage()
		  .then(response => {

			setNumberOfPages(response.data.totalPages);
			console.log(response.data);
				})
		  .catch(e => {
			  console.log(e);
		  });

		  ClientAxios.get(filterData.letter,filterData.searchStr,filterData.page)
		  .then(response => {

			setClients(response.data.clients);
			console.log(response.data);
				})
		  .catch(e => {
			  console.log(e);
		  });
	  }, []);





	useEffect(() => {


		ClientAxios.get(filterData.letter,filterData.searchStr,filterData.page)
		  .then(response => {

			setClients(response.data.clients);
			console.log(response.data);
				})
		  .catch(e => {
			  console.log(e);
		  });

	}, [nmberOfPages, filterData])

	useEffect(() => {
		ClientAxios.get(filterData.letter,filterData.searchStr,filterData.page)
		.then(response => {

		  setNumberOfPages(response.data.totalPages);
		  console.log(response.data);
			  })
		.catch(e => {
			console.log(e);
		});

	}, [filterData])


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
		}
	}

	const pageToParent = (childdata) => {
		if (childdata > 0 && childdata <= nmberOfPages)
			setFilterData({ letter: filterData.letter, searchStr: filterData.searchStr, page: childdata - 1  })
		else {
			if(filterData.page + 1 < nmberOfPages)
			setFilterData({ letter: filterData.letter, searchStr: filterData.searchStr, page: (filterData.page == nmberOfPages ? filterData.page : filterData.page +1) })
		}
	}
	const popupCloseHandler = () => {
		setVisibility(false);
	  };

	  
	const dataInFormSend = (e) => {
		ClientAxios.update(e)
		.then(response => {
		  console.log(response.data);
			  })
		.catch(e => {
			console.log(e);
		});
	}

	const dataInFormDelete = (e) => {
		ClientAxios.deleteById(e.id)
		.then(response => {
		  console.log(response.data);
			  })
		.catch(e => {
			alert("Oops, projects are conected to this client!")
		});
	}

	return (
		<>
			<div class="container">
				<div class="wrapper">
					<section class="content">
						<h2><i class="ico team-member"></i>Clients</h2>
						<div class="grey-box-wrap reports ico-member">
							<a onClick={() => setVisibility(true)} href="script:;" class="link new-member-popup test">
								<span>Create new client</span>
							</a>
							<div class="search-page">
								<Input value={searchValue} searchStrToParent={searchStrToParent} inputType={"search"} />
							</div>
						</div>

						<Alpha deactivate={deactivate} letterToParent={letterToParent} letters={clientLetters} />
						<Pagination dataInFormSend={dataInFormSend} dataInFormDelete={dataInFormDelete} pages={nmberOfPages} pageToParent={pageToParent} type="client" dataList={clients} />
						<CustomPopup
							onClose={popupCloseHandler}
							show={visibility}
							title="Create new client"
							>
							<div class="new-member-inner">
								<CreateNewForm type="client" />
							</div>
						</CustomPopup>
					</section>
				</div>

			</div>
		</>
	)
};
export default Clients;