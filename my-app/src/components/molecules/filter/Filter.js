import Select from '../../atoms/selects/Select';
import { useState, useEffect } from 'react';
import Input from '../../atoms/inputs/Input';
import Button from '../../atoms/buttons/Button'
import moment from 'moment';

function Filter(props) {
    const [users, setUsers] = useState(props.users);
    const [clients, setClients] = useState(props.clients);
    const [projects, setProjects] = useState(props.projects);
    const [categories, setCategories] = useState(props.categories);
    const [userId, setUserId] = useState(-1);
    const [clientId, setClientId] = useState(-1);
    const [projectId, setProjectId] = useState(-1);
    const [category, setCategory] = useState(-1);

    useEffect(() => {
        setUsers(props.users);
        setClients(props.clients);
        setProjects(props.projects);
        setCategories(props.categories);
	}, [props.users,props.clients,props.projects,props.categories])

    const onClickSearch = (e) =>{
        props.filterToParent(
            {
            userId: userId,
            clientId: clientId,
            projectId: projectId,
            category: category,
            startDate: localStorage.getItem('startDate'),
            endDate: localStorage.getItem('endDate')
        }
        );
    }

    useEffect(() => {
        props.filterSlectsParent(
            {
            userId: userId,
            clientId: clientId,
            projectId: projectId,
            category: category,
            startDate: localStorage.getItem('startDate'),
            endDate: localStorage.getItem('endDate')
        }
        );
    }, [userId,clientId,projectId,projectId,category])

    const onClickReset = (e) => {
        localStorage.removeItem('startDate');
        localStorage.removeItem('endDate');
        window.location.reload();
    }

    return (
        <>
            <form>
                <ul class="form">
                    <li>
                        <Select getChange={(e) => setUserId(e)} defaultText="ALL" value={userId} defaultValue={-1} dataList={users} isRequired={false} isNull={true} topic={"data"} labelName="Team member" />
                    </li>
                    <li>
                        <Select getChange={(e) => setCategory(e)} defaultText="ALL" value={category} defaultValue={-1} options={categories} isRequired={false} isNull={true} labelName="Category" />
                    </li>
                </ul>
                <ul class="form">
                    <li>
                        <Select getChange={(e) => setClientId(e)} defaultText="ALL" value={clientId} defaultValue={-1} dataList={clients} isRequired={false} isNull={true} topic={"data"} labelName="Client" />
                    </li>
                    <li>
                        <Input getChange={(e) => StartDateChange(e)} inputType='date' mainLabelName='Start date' />
                    </li>
                </ul>
                <ul class="form last">
                    <li>
                        <Select getChange={(e) => setProjectId(e)} defaultText="ALL" value={projectId} defaultValue={-1} dataList={projects} isRequired={false} isNull={true} topic={"data"} labelName="Projects" />
                    </li>
                    <li>
                        <Input getChange={(e) => EndDateChange(e)} inputType='date' mainLabelName='End date' />
                    </li>
                    <li>
                        <Button onClick={onClickReset} className={"btn orange right"} name="Reset" />
                        <Button onClick={onClickSearch} className={"btn green right"} name="Search" />
                    </li>
                </ul>
            </form>
        </>
    )


    function StartDateChange(e)
    {
        let d = new Date(e);
 
        let text = d.toString();

        if(text == "Invalid Date")
        {
            if(localStorage.getItem('startDate') != null)
            {
            text = localStorage.getItem('startDate');
            }
            else
            {
            text = "";
            }
        }

        localStorage.removeItem('startDate');
        localStorage.setItem('startDate', text);

    }
    function EndDateChange(e)
    {
        let d = new Date(e);
 
        let text = d.toString();

        if(text == "Invalid Date")
        {
            if(localStorage.getItem('endDate') != null)
            {
            text = localStorage.getItem('endDate');
            }
            else
            {
            text = "";
            }
        }


        localStorage.removeItem('endDate');
        localStorage.setItem('endDate', text);

    }
};
export default Filter;