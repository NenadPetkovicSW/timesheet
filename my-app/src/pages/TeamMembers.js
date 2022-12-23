import { useEffect, useState } from 'react';
import '../assets/css/style.css';
import Input from '../components/atoms/inputs/Input';
import CreateNewForm from '../components/molecules/forms/Form';
import Pagination from '../components/organisms/pagination/Pagination';
import * as UserServices from '../services/users/UsersServices';
import * as mock from '../mock/mock'
import CustomPopup from '../components/organisms/popup/CustomPopup';
import * as UserAxios from '../services/axios/users/Users';

function TeamMembers(props) {
	const [users, setUsers] = useState([]);
	const [visibility, setVisibility] = useState(false);

	const [usersLetters, setUsersLetters] = useState([]);

	const [nmberOfPages, setNumberOfPages] = useState(0);

	const [searchValue, setSearchValue] = useState("");

	const [filterData, setFilterData] = useState({ letter: '', searchStr: '', page: 0 })

	useEffect(() => {
		UserAxios.getAlpha()
		  .then(response => {
			let array = [];
			
			response.data.forEach(element => {
				array.push(element)
			});

			setUsersLetters(array);
			console.log(response.data);
				})
		  .catch(e => {
			  console.log(e);
		  });

		  UserAxios.getPage()
		  .then(response => {

			setNumberOfPages(response.data.totalPages);
			console.log(response.data);
				})
		  .catch(e => {
			  console.log(e);
		  });

		  UserAxios.get(filterData.letter,filterData.searchStr,filterData.page)
		  .then(response => {

			setUsers(response.data.users);
			console.log(response.data);
				})
		  .catch(e => {
			  console.log(e);
		  });
	  }, []);

	useEffect(() => {
		UserAxios.get(filterData.letter,filterData.searchStr,filterData.page)
		  .then(response => {

			setUsers(response.data.users);
			console.log(response.data);
				})
		  .catch(e => {
			  console.log(e);
		  });
	}, [nmberOfPages, filterData])

	useEffect(() => {
		UserAxios.get(filterData.letter,filterData.searchStr,filterData.page)
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
		}	}

	const searchStrToParent = (childdata) => {
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
		alert(JSON.stringify(e))
	}

	const dataInFormDelete = (e) => {
		alert(JSON.stringify(e))
	}

	const resetPassword = (e) => {
		alert(JSON.stringify(e))
	}

	return (
		<>
			<div class="container">
				<div class="wrapper">
					<section class="content">
						<h2><i class="ico team-member"></i>Team members</h2>
						<div class="grey-box-wrap reports ico-member">
							<a onClick={() => setVisibility(true)} href="script:;"  class="link new-member-popup test">
								<span>Create new member</span>
							</a>
							<div class="search-page">
								<Input value={searchValue} searchStrToParent={searchStrToParent} inputType={"search"} />
							</div>
						</div>
						<Pagination resetPassword={resetPassword} dataInFormSend={dataInFormSend} dataInFormDelete={dataInFormDelete} pages={nmberOfPages} pageToParent={pageToParent} dataList={users} />
						<CustomPopup
							onClose={popupCloseHandler}
							show={visibility}
							title="Create new user"
							>
							<div class="new-member-inner">
								<CreateNewForm />
							</div>
						</CustomPopup>
					</section>
				</div>

			</div>
		</>
	)
};
export default TeamMembers;