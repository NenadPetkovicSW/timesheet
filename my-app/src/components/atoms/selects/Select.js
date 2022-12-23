import React, { useEffect, useState } from "react";
import countryList from 'react-select-country-list';
import '../../../assets/css/style.css';

function Select(props) {

  const [defaultText, setDefaultText] = useState(props.defaultText || "Choose");
  const [defaultValue, setDefaultValue] = useState(props.defaultValue || null);
  const [labelName, setLabelName] = useState(props.labelName);
  const [topic, setTopic] = useState(props.topic);
  const [value, setValue] = useState(props.value)
  const [dataList, setDataList] = useState(props.dataList)
  const [isRequired, setSsRequired] = useState(props.isRequired);
  const [isNull, setIsNull] = useState(props.isNull);
  const [isLabelHidden, setIsLabelHidden] = useState(props.isLabelHidden || false)

  useEffect(() => {
    setLabelName(props.labelName);
    setTopic(props.topic);
    setValue(props.value);
    setDataList(props.dataList);
    setSsRequired(props.isRequired);
    setDefaultText(props.defaultText || "Choose")
    setDefaultValue(props.defaultValue || null)
    setIsLabelHidden(props.isLabelHidden || false)
  }, [props])

  function change(event){
    getChange(event.target.value)
    setValue(event.target.value)
    if(props.getValue)
    props.getValue(event.target.value);

  }

  const getChange = (e) => {
    props.getChange(e)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.enterPressValue(event.target.value)
    }}

  const country_list = countryList().getLabels();

  let returnTag;
  if (topic == 'data') {
    returnTag =
      <>
        <label hidden={isLabelHidden ? "true" : "false"}>{labelName}:</label>
        <select onKeyPress={handleKeyDown} 
                onChange={(e) => {
                  setValue(e.target.value);
                  change(e)   
                  console.log(e);         
                }} 
                required={isRequired} 
                value={value}
                defaultValue={value}>
          {
            !isNull ?
              <option value={defaultValue} selected={true} disabled>{defaultText} {labelName}</option>
              :
              <option value={defaultValue} selected={true} >{defaultText} {labelName}</option>
          }
          {dataList.map((data, index) => {
            return <option value={data.id} >{data.name}</option>
          })}
        </select>
      </>
  }
  else {
    let options;
    if (topic == 'country') {
      options = country_list;
    }
    else {
      options = props.options;
    }

    returnTag =
      <>
        <label hidden={isLabelHidden ? "true" : "false"}>{labelName}:</label>
        <select onKeyPress={handleKeyDown}
        onChange={(e) => {
                    setValue(e.target.value);
                    change(e)
                    console.log(e);
                  }} 
                  defaultValue={value}
                  value={value}
                  required={isRequired}>
          {
            !isNull ?
              <option value={defaultValue} selected={true} disabled>{defaultText} {labelName}</option>
              :
              <option value={defaultValue} selected={true} >{defaultText} {labelName}</option>
          }
          {options.map((option, index) => {
            return <option value={option}>{option}</option>
          })}
        </select>
      </>
  }

  return (
    <>
      {returnTag}
    </>
  )

};
export default Select;