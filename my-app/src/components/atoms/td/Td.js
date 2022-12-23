import { useState, useEffect } from 'react';
import Input from '../inputs/Input';
import Select from '../selects/Select'
import Form from '../../molecules/forms/Form'
function Td(props) {
    const [column, setColumn] = useState(props.column);
    const [selectData, setSelectData] = useState(props.selectData);
    const [tableData, setTableData] = useState(props.tableData);

    const [type, setType] = useState(props.type);

    useEffect(() => {
        setColumn(props.column);
        setTableData(props.tableData);
        setType(props.type);
        setSelectData(props.selectData)
    }, [props.column, props.tableData, props.type, props.selectData])

    const getData = (data) => {
        props.getData(data)
      }    

    return tableData.map((data) => {
        return (
            <tr key={"tr_" + data["id"]}>

                {
                    type == "report" ?
                        <>
                            <Form getData={getData} type={"report"} isRequired={props.isRequired} restrictionType={props.restrictionType} selectData={selectData} data={data} />
                        </>

                        :
                        column.map((v) => {
                            if (data[v].name != null)
                                return <td className='td-reports'>{data[v].name}</td>
                            else
                                return <td className='td-reports'>{data[v]}</td>
                        })
                }

            </tr>
        )
    })
}
export default Td;