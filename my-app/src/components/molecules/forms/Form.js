import Button from '../../atoms/buttons/Button';
import '../../../assets/css/style.css';
import Input from '../../atoms/inputs/Input';
import Select from '../../atoms/selects/Select'
import { useState, useEffect } from 'react';

function Form(props) {
	const [type, setType] = useState(props.type);
	const [users, setUsers] = useState(props.users);
	const [clients, setClients] = useState(props.clients);
	const [projects, setProjects] = useState(props.projects);

	const [selectData, setSelectData] = useState(props.selectData);
	const [data, setData] = useState(props.data);

	const [isRequired, setIsRequired] = useState(props.isRequired);
	const [restrictionType, setRestrictionType] = useState(props.restrictionType);

	const [id, setId] = useState(props.data?.id||-1)
	const [workerId, setWorkerId] = useState(props.data?.worker.id || -1);
	const [date, setDate] = useState(props.data?.date || "");
	const [clinetId, setClientId] = useState(props.data?.client.id || -1);
	const [projectId, setProjectId] = useState(props.data?.project.id || 0);
	const [category, setCategory] = useState(props.data?.category ||"");
	const [description, setDescriptions] = useState(props.data?.description ||"");
	const [time, setTime] = useState(props.data?.time || 0);
	const [overTime, setOverTime] = useState(props.data?.overTime || 0);

	const [dataToSend, setDataToSend] = useState(
		{
			id: id,
			workerId: workerId,
			date: date,
			clinetId: clinetId,
			projectId: projectId,
			category: category,
			description: description,
			time: time,
			overTime: overTime
		}
	)
	useEffect(() => {
		setId(props.data?.id||-1)
		setDate(props.data?.date ||"")
		setWorkerId(props.data?.worker.id||-1)
		setDate(props.data?.date ||"")
		setClientId(props.data?.client.id||-1)
		setProjectId(props.data?.project.id || 0)
		setCategory(props.data?.category ||"")
		setDescriptions(props.data?.description ||"")
		setTime(props.data?.time || 0)
		setOverTime(props.data?.overTime || 0)
		setType(props.type || "")
		setUsers(props.users)
		setClients(props.clients)
		setProjects(props.projects)
		setSelectData(props.selectData)
		setRestrictionType(props.restrictionType)
		setIsRequired(props.isRequired)
	  }, [props.type,props.users,props.clients,props.projects,props.selectData,props.restrictionType, props.isRequired])

	  useEffect(() => {
		setDataToSend(
			{
				id: id,
				workerId: workerId,
				date: date,
				clinetId: clinetId,
				projectId: projectId,
				category: category,
				description: description,
				time: time,
				overTime: overTime
			}
	  )}, [date, clinetId, projectId, category, description, time, overTime])



	const enterPressValue = (data) => {
		props.getData(dataToSend)
	}

	let returnValue = <></>;

	if (type == 'project')
		returnValue = <>
			<form id="myform">
				<ul class="form">
					<li>
						<Input isRequired={true} value={""} className="in-text" inputType="text" labelName="Project name" />
					</li>
					<li>
						<Input value={""} className="in-text" inputType="text" labelName="Description" />
					</li>
					<li>
						<Select dataList={clients} isRequired={true} topic={"data"} labelName="Customer" />
					</li>
					<li>
						<Select dataList={users} isRequired={true} topic={"data"} labelName="Lead" />
					</li>
				</ul>
				<div class="buttons">
					<div class="inner">
						<Button isRequired={true} className="btn green" name="Save" />
					</div>
				</div>
			</ form></>;
	else if (type == 'client')
		returnValue = <>
			<form id="myform">
				
				<ul class="form">
					<li>
						<Input isRequired={true} value={""} className="in-text" inputType="text" labelName="Client name" />
					</li>
					<li>
						<Input isRequired={true} value={""} className="in-text" inputType="text" labelName="Address" />
					</li>
					<li>
						<Input isRequired={true} value={""} className="in-text" inputType="text" labelName="City" />
					</li>
					<li>
						<Input isRequired={true} value={""} className="in-text" inputType="text" restrictionType="numbersOnly" labelName="Zip/Postal code" />
					</li>
					<li>
						<Select isRequired={true} topic={"country"} labelName="Countries" />
					</li>
				</ul>
				<div class="buttons">
					<div class="inner">
						<Button isRequired={true} className="btn green" name="Save" />
					</div>
				</div>
			</form>
		</>;
	else if (type == 'report')
		returnValue = <>
			<td className='td-reports'><Select getChange={(e) => setClientId(e)} enterPressValue={enterPressValue} restrictionType={restrictionType[0]}
				isRequired={isRequired[0]}
				dataList={selectData['client']}
				labelName="Client"
				options={selectData['client']}
				value={clinetId}
				topic={"data"}
				isLabelHidden={true} />
			</td>
			<td className='td-reports'><Select getChange={(e) => setProjectId(e)} enterPressValue={enterPressValue} restrictionType={restrictionType[1]}
				isRequired={isRequired[1]}
				dataList={selectData['project']}
				options={selectData['project']}
				labelName="Project"
				value={projectId}
				topic={"data"}
				isLabelHidden={true} />
			</td>
			<td className='td-reports'><Select getChange={(e) => setCategory(e)} enterPressValue={enterPressValue} restrictionType={restrictionType[2]}
				isRequired={isRequired[2]}
				dataList={selectData['category']}
				options={selectData['category']}
				labelName="Category"
				value={category}
				topic={'category'}
				isLabelHidden={true} />
			</td>
			<td className='td-reports'><Input getChange={(e) => setDescriptions(e)} enterPressValue={enterPressValue} restrictionType={restrictionType[3]}
				isRequired={isRequired[3]}
				className="in-text" value={description}
				labelName="Description"
				inputType="text"
				isLabelHidden={true} />
			</td>
			<td className='td-reports'><Input getChange={(e) => setTime(e)} enterPressValue={enterPressValue} restrictionType={restrictionType[4]}
				isRequired={isRequired[4]}
				className="in-text" value={time}
				labelName="Time"
				inputType="text"
				isLabelHidden={true} />
			</td>
			<td className='td-reports'><Input getChange={(e) => setOverTime(e)} enterPressValue={enterPressValue} restrictionType={restrictionType[5]}
				isRequired={isRequired[5]}
				className="in-text" value={overTime}
				labelName="Over Time"
				inputType="text"
				isLabelHidden={true} />
			</td>
		</>;
	else if (type == 'reportEmpty')
		returnValue = <>
			<td className='td-reports'><Select getChange={(e) => setClientId(e)} enterPressValue={enterPressValue} restrictionType={restrictionType[0]}
				isRequired={isRequired[0]}
				dataList={selectData['client']}
				options={selectData['client']}
				labelName="Client"
				topic={"data"}
				isLabelHidden={true} />
			</td>
			<td className='td-reports'><Select getChange={(e) => setProjectId(e)} enterPressValue={enterPressValue} restrictionType={restrictionType[1]}
				isRequired={isRequired[1]}
				dataList={selectData['project']}
				labelName="Project"
				options={selectData['project']}
				topic={"data"}
				isLabelHidden={true} />
			</td>
			<td className='td-reports'><Select getChange={(e) => setCategory(e)} enterPressValue={enterPressValue} restrictionType={restrictionType[2]}
				isRequired={isRequired[2]}
				dataList={selectData['category']}
				labelName="Category"
				options={selectData['category']}
				topic={'category'}
				isLabelHidden={true} />
			</td>
			<td className='td-reports'><Input getChange={(e) => setDescriptions(e)} enterPressValue={enterPressValue} restrictionType={restrictionType[3]}
				isRequired={isRequired[3]}
				className="in-text"
				inputType="text"
				value={""}
				isLabelHidden={true} />
			</td>
			<td className='td-reports'><Input getChange={(e) => setTime(e)} enterPressValue={enterPressValue} restrictionType={restrictionType[4]}
				isRequired={isRequired[4]}
				className="in-text"
				inputType="text"
				value={0}
				isLabelHidden={true} />
			</td>
			<td className='td-reports'><Input getChange={(e) => setOverTime(e)} 
				enterPressValue={enterPressValue} 
				restrictionType={restrictionType[5]}
				isRequired={isRequired[5]}
				value={0}
				className="in-text"
				inputType="text"
				isLabelHidden={true} />
			</td>
		</>;
	else
		returnValue = <>
			<form id="myform">
				<ul class="form">
					<li>
						<Input isRequired={true} value={""} className="in-text" inputType="text" labelName="Name" />
					</li>
					<li>
						<Input isRequired={true} value={0} className="in-text" inputType="text" restrictionType="numbersOnly" labelName="Hours per week" />
					</li>
					<li>
						<Input isRequired={true} value={""} className="in-text" inputType="text" labelName="Username" />
					</li>
					<li>
						<Input isRequired={true} value={""} className="in-text" restrictionType="email" inputType="text" labelName="Email" />
					</li>
					<li class="inline">
						<fieldset id="groupAddStatus">
							<Input isRequired={true} inputType="radio" className="radio" checkedFirst={true} position={"Add"} mainLabelName="Status" firstLabelName="Inactive" secondLabelName="Active" />
						</fieldset>
					</li>
					<li class="inline">
						<fieldset id="groupAddRole">
							<Input isRequired={true} inputType="radio" className="radio" checkedFirst={true} position={"Add"} mainLabelName="Role" firstLabelName="Worker" secondLabelName="Admin" />
						</ fieldset>
					</li>
				</ul>
				<div class="buttons">
					<div class="inner">
						<Button isRequired={true} className="btn green" name="Invite team member" />
					</div>
				</div>
			</ form></>

	return (
		<>
			{returnValue}
		</>
	)

};
export default Form;