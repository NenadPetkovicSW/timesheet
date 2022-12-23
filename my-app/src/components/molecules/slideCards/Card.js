import { useEffect, useState } from 'react';
import '../../../assets/css/style.css';
import Button from '../../atoms/buttons/Button';
import Input from '../../atoms/inputs/Input';
import Select from '../../atoms/selects/Select';
import useCollapse from 'react-collapsed';
import { error } from 'jquery';

// TODO: Card to React card so you can remov js scripts
function Card(props) {
	const [data, setData] = useState(props.data);
	const [position, setPosition] = useState(props.position);
	const [type, setType] = useState(props.type)
	const [users, setUsers] = useState(props.users);
	const [clients, setClients] = useState(props.clients);
	const [projects, setProjects] = useState(props.projects);

	const [isExpanded, setExpanded] = useState(false);
	const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

	// Project
	const [id, setId] = useState(-1);
	const [name, setName] = useState("");
	const [lead, setLead] = useState(-1);
	const [description, setDescription] = useState("");
	const [customer, setCustomer] = useState(-1);
	const [status, setStatus] = useState(false);
	const [archive, setArchive] = useState(true);

	// CLIENT
	const [zipPostalCode, setZipPostalCode] = useState("");
	const [address, setAddress] = useState("");
	const [country, setCountry] = useState("");
	const [city, setCity] = useState("");

	// TEAM MEMBER
	const [hoursPerWeek, setHoursPerWeek] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");

	// SAVE
	const [dataToSave, setDataToSave] = useState({}) 
	const [error, setError] = useState(0);

	useEffect(() => {
		setError(0);
		setData(props.data);
		setId(props.data.id || 0);
		setName(props.data?.name || "");

		if(type == 'project'){
			setDescription(props.data?.description || "");
			setStatus(props.data?.status);
			setArchive(props.data?.archive);
			setCustomer(props.data?.customer.id || -1);
			setLead(props.data?.lead.id || "");
		}
		else if(type == 'client'){
			setZipPostalCode(props.data?.zipPostalCode || "");
			setAddress(props.data?.address || "");
			setCountry(props.data?.country || "");
			setCity(props.data?.city || "");
		}
		else
		{
			setHoursPerWeek(props.data?.hoursPerWeek || 0);
			setUsername(props.data?.username || "");
			setEmail(props.data?.email || "");
			setRole(props.data?.role || "");
			setStatus(props.data?.status);
		}
	}, [props.data])

	function handleOnClick() {
		setExpanded(!isExpanded);
	}

	useEffect(() => {
		if(type == 'project'){
		setDataToSave({
			id: id,
			name: name,
			lead: lead,
			customer: customer,
			description: description,
			status: status,
			archive: archive
		});}
		else if(type == 'client'){
			setDataToSave({
				id: id,
				name: name,
				zipPostalCode: zipPostalCode,
				address: address,
				country: country,
				city: city
			});
		}
		else
		{
			setDataToSave({
				id: id,
				name: name,
				hoursPerWeek: hoursPerWeek,
				username: username,
				email: email,
				role: role,
				status: status
			});
		}
	  }, [id, name, lead, customer, description, status, archive,
		  zipPostalCode, address, country, city,
		  hoursPerWeek, username, email, role])


    const setErrorBoxCount = (e) => {
		if(e.error == true)
		{
			setError(error+1);
		}
		else
		{
			if(error != 0)
			{
				setError(error-1);
			}

		}
		}

	const dataInFormSend = (e) => {
		if(error==0)
		props.dataInFormSend(dataToSave)
		else
		alert("You need to fix your inputs!")
	}

	const dataInFormDelete = (e) => {
		props.dataInFormDelete(dataToSave)
	}

	const resetPassword = (e) => {
		props.resetPassword(dataToSave)
	}

	let returnedCard = <></>;

	if (type == 'project')
		returnedCard = <>
			<div key={type + position} id={"" + type + position} class="item">
				<div class="card-heading" {...getToggleProps({ onClick: handleOnClick })}>
					<span>{data.name}</span><em>({data.customer.name})</em><span></span>
					<i>+</i>
				</div>
				<div  class="card-details" {...getCollapseProps()}>
					<div>
						<form id={"form" + position}>
							<ul class="card-form">
								<li>
									<Input getError={(e) => setErrorBoxCount(e)} getChange={(e) => {setName(e)}} isRequired={true} className="in-text" value={name} inputType="text" labelName="Project name" />
								</li>
								<li>
									<Select getError={(e) => setErrorBoxCount(e)} getChange={(e) => {setLead(e)}} isLabelHidden={false} dataList={users} value={lead} isRequired={true} topic={"data"} labelName="Lead" />
								</li>
							</ul>
							<ul class="card-form">
								<li>
									<Input getError={(e) => setErrorBoxCount(e)} getChange={(e) => {setDescription(e)}} className="in-text" value={description} inputType="text" labelName="Description" />
								</li>
							</ul>
							<ul class="card-form last" id={position}>
								<li>
									<Select getError={(e) => setErrorBoxCount(e)} getChange={(e) => {setCustomer(e)}} isLabelHidden={false} dataList={clients} value={customer} isRequired={true} topic={"data"} labelName="Customer" />
								</li>
								<li class="inline">
									<fieldset id={"groupStatus" + position}>
										<li>
											<Input getError={(e) => setErrorBoxCount(e)} getRadioChange={(e) => {setStatus(e)}} isRequired={true} inputType="radio" className="radio" checkedFirst={!status} position={position} mainLabelName="Status" firstLabelName="Inactive" secondLabelName="Active" />
										</li>
									</fieldset>
									<Input getCheckBoxChange={(e) => {setArchive(e)}} isRequired={true} className={"checkBox"} value={archive} inputType={"checkbox"} labelName="Archive" />
								</li>
							</ul>
							<div class='buttons'>
								<div class="inner">
									<Button onClick={(e) => dataInFormSend(e)} className="btn green" name="Save" />
									<Button onClick={(e) => dataInFormDelete(e)} className="btn red" name="Delete" />
								</div>
							</div>
						</ form>
					</div>
				</div>
			</div>
		</>;
	else if (type == 'client')
		returnedCard = <>
			<div key={type + position} id={"" + type + position} class="item">
			<div class="card-heading" {...getToggleProps({ onClick: handleOnClick })}>
					<span>{data.name}</span>
					<i>+</i>
				</div>
				<div  class="card-details" {...getCollapseProps()}>
					<form id={"form" + position}>
						<ul class="form">
							<li>
								<Input getError={(e) => setErrorBoxCount(e)} getChange={(e) => setName(e)}  isRequired={true} className="in-text" value={name} inputType="text" labelName="Client name" />
							</li>
							<li>
								<Input getError={(e) => setErrorBoxCount(e)}  getChange={(e) => setZipPostalCode(e)} isRequired={true} className="in-text" value={zipPostalCode} restrictionType="numbersOnly" inputType="text" labelName="Zip/Postal code" />
							</li>
						</ul>
						<ul class="form">
							<li>
								<Input getError={(e) => setErrorBoxCount(e)} getChange={(e) => setAddress(e)} isRequired={true} className="in-text" value={address} inputType="text" labelName="Address" />
							</li>
							<li>
								<Select getError={(e) => setErrorBoxCount(e)} getChange={(e) => setCountry(e)}  isRequired={true} topic="country" labelName="Country" value={country} />
							</li>
						</ul>
						<ul class="form last" id={position}>
							<li>
								<Input getError={(e) => setErrorBoxCount(e)} getChange={(e) => setCity(e)} isRequired={true} className="in-text" value={city} inputType="text" labelName="City" />
							</li>
						</ul>
						<div class='buttons'>
								<div class="inner">
								<Button onClick={(e) => dataInFormSend(e)} className="btn green" name="Save" />
								<Button onClick={(e) => dataInFormDelete(e)} className="btn red" name="Delete" />
								<p hidden={error==0} class="errors">Fix your inputs!</p>
						</div>
						</div>
					</ form>
				</div>

			</div>
		</>;
	else
		returnedCard = <>
			<div key={"user" + position} id={"" + type + position} class="item">
			<div class="card-heading" {...getToggleProps({ onClick: handleOnClick })}>
					<span>{data.name}</span>
					<i>+</i>
				</div>
				<div  class="card-details" {...getCollapseProps()}>
					<form id={"form" + position}>
						<ul class="form">
							<li>
								<Input getError={(e) => setErrorBoxCount(e)} getChange={(e) => {setName(e)}} isRequired={true} className="in-text" value={name} inputType="text" labelName="Name" />
							</li>
							<li>
								<Input getError={(e) => setErrorBoxCount(e)} getChange={(e) => {setHoursPerWeek(e)}} isRequired={true} className="in-text" restrictionType="numbersOnly" value={hoursPerWeek} inputType="text" labelName="Hours per week" />
							</li>
						</ul>
						<ul class="form">
							<li>
								<Input getError={(e) => setErrorBoxCount(e)} getChange={(e) => {setUsername(e)}} isRequired={true} className="in-text" value={username} inputType="text" labelName="Username" />
							</li>
							<li>
								<Input getError={(e) => setErrorBoxCount(e)} getChange={(e) => {setEmail(e)}} isRequired={true} className="in-text" restrictionType="email" value={email} inputType="text" labelName="Email" />
							</li>
						</ul>
						<ul class="form last" id={position}>
							<fieldset id={"groupStatus" + position}>
								<li>
									<Input getError={(e) => setErrorBoxCount(e)} getRadioChange={(e) => {setStatus(e)}} isRequired={true} inputType="radio" className="radio" checkedFirst={!status} position={position} mainLabelName="Status" firstLabelName="Inactive" secondLabelName="Active" />
								</li>
							</fieldset>
							<fieldset id={"groupRole" + position}>
								<li>
									<Input getError={(e) => setErrorBoxCount(e)} getRadioChange={(e) => {setRole(e)}} isRequired={true} inputType="radio" className="radio" checkedFirst={role == "Worker"} position={position} mainLabelName="Role" firstLabelName="Worker" secondLabelName="Admin" />
								</li>
							</fieldset>
						</ul>
						<div class="buttons">
							<div class="inner">
								<Button onClick={(e) => dataInFormSend(e)} className="btn green" name="Save" />
								<Button onClick={(e) => dataInFormDelete(e)} className="btn red" name="Delete" />
								<Button onClick={(e) => resetPassword(e)} className="btn orange" name="Reset Password" />
							</div>
						</div>
					</ form>
				</div>

			</div>
		</>;


	return (
		<>
			{returnedCard}
		</>
	)

};
export default Card;