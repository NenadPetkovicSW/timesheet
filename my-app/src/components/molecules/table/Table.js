import { useEffect, useState } from 'react';
import Td from "../../atoms/td/Td";
import Th from "../../atoms/th/Th";
import Form from '../forms/Form';

function Table(props) {
  const [header, setHeader] = useState(props.header);
  const [column, setColumn] = useState(props.column || Object.keys(props.tableData[0]));
  const [tableData, setTableData] = useState(props.tableData || []);
  const [type, setType] = useState(props.type || "")
  const [selectData, setSelectData] = useState(props.selectData);
  const [isRequired, setIsRequired] = useState(props.isRequired);
  const [restrictionType, setRestrictionType] = useState(props.restrictionType);


  useEffect(() => {
    setColumn(props.column || Object.keys(props.tableData[0]));
    setHeader(props.header || props.column || Object.keys(props.tableData[0]));
    setTableData(props.tableData);
    setType(props.type || "")
    setSelectData(props.selectData)
    setRestrictionType(props.restrictionType)
    setIsRequired(props.isRequired)
  }, [props.column, props.header, props.tableData, props.type, props.selectData, props.isRequired, props.restrictionType])

  const getData = (data) => {
    props.getData(data)
  }

  return (
    <table className="table-reports">
      <thead>
        <tr>{<Th isRequired={isRequired} column={column} header={header} />}</tr>
      </thead>
      <tbody className="table-body-reports">  
        {
          <Td getData={getData} column={column} restrictionType={props.restrictionType} isRequired={props.isRequired} selectData={selectData} tableData={tableData} type={type}/>
        }
        {
          type == "report" ?
          <tr>
          <Form getData={getData} type={"reportEmpty"} selectData={selectData} isRequired={isRequired} restrictionType={restrictionType}/>
          </tr>
          :
          <></>
        }
      </tbody>
    </table>
  )
}
export default Table;