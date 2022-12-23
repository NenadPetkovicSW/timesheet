import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../../../assets/css/style.css';
import moment from "moment";

function Input(props) {
  const [value, setValue] = useState(props.value);
  const [className, setClassName] = useState(props.className);
  const [labelName, setLabelName] = useState(props.labelName);
  const [inputType, setInputType] = useState(props.inputType);
  const [restrictionType, setRestrictionType] = useState(props.restrictionType || '');
  const [mainLabelName, setMainLabelName] = useState(props.mainLabelName);
  const [firstLabelName, setFirstLabelName] = useState(props.firstLabelName);
  const [secondLabelName, setSecondLabelName] = useState(props.secondLabelName);
  const [position, setPosition] = useState(props.position);
  const [checkedFirst, setCheckedFirst] = useState(props.checkedFirst);
  const [isRequired, setIsRequired] = useState(props.isRequired);
  const [isLabelHidden, setIsLabelHidden] = useState(props.isLabelHidden || false);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    setValue(props.value);
    setClassName(props.className);
    setLabelName(props.labelName);
    setInputType(props.inputType);
    setRestrictionType(props.restrictionType || '');
    setMainLabelName(props.mainLabelName);
    setFirstLabelName(props.firstLabelName);
    setSecondLabelName(props.secondLabelName);
    setPosition(props.position);
    setCheckedFirst(props.checkedFirst);
    setIsRequired(props.isRequired);
    setIsLabelHidden(props.isLabelHidden);
  }, [props.value,props.className,props.labelName,
    props.inputType,props.restrictionType,props.mainLabelName,
    props.firstLabelName,props.secondLabelName,props.position,
    props.checkedFirst,props.isRequired,props.isLabelHidden, props.getRadioChange])

  useEffect(() => {
    if(startDate!=null){
      setValue(moment(startDate).format('YYYY-MM-DD').toString());
      getChange(moment(startDate).format('YYYY-MM-DD').toString())
    }
  }, [startDate])

  useEffect(() => {
    if(checkedFirst==true && checkedFirst!=null)
      setValue(firstLabelName.replace(/\s+/g, ''));
    else if(checkedFirst==false && checkedFirst!=null)
      setValue(secondLabelName.replace(/\s+/g, ''));
  }, [checkedFirst])

  useEffect(() => {
    if(props.getValue)
      props.getValue(value)
  }, [value])

  useEffect(() => {
    if(props.getError)
    props.getError({error:error, errorMessage:errorMessage})
  }, [error])


  function validateEmpty(str) {
    if ((str.trim()) != '') {
      if (restrictionType == '') {
        setError(false);
        setErrorMessage('');
        
      }
    } else {
      if (isRequired != true) {
        setError(false);
        setErrorMessage('');
      }
      else {
        setErrorMessage('You need to fill this feild!');
        setError(true);
      }
    }
  }

  function validateEmail(email) {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      setError(false);
      setErrorMessage('');
    } else {
      setErrorMessage('Not the right format of the email address!');
      setError(true);
      validateEmpty(email);   
    }
  }

  function validateNumbersOnly(numbers) {
    const pattern = /^[0-9\b]+[\.]?([0-9\b]+)?$/;
    const result = pattern.test(numbers);
    if (result === true) {
      setError(false);
    } else {
      setErrorMessage('Numbers only!');
      setError(true);
      validateEmpty(numbers);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.enterPressValue(event.target.value)
    }
    else
    {
      
    }
  }

    const getChange = (e) => {
      props.getChange(e)
    }

    const getCheckBoxChange = (e) => {
      if(e.target.value == "on")
        props.getCheckBoxChange(true)
      if(e.target.value == "off")
        props.getCheckBoxChange(false)
    }

    const getRadioChange = (e) => {

      if(e == "Admin")
      {
        props.getRadioChange("Admin")
      }
      else if(e == "Worker")
      {
        props.getRadioChange("Worker")
      }
      else if(e == "Active"){
      props.getRadioChange(true)}
      else{
      props.getRadioChange(false)
      }
    }

  let returnTag;

  if (inputType == 'text') {
    returnTag =
      <>
        <label hidden={isLabelHidden}>{labelName}:</label>
        <input onKeyPress={handleKeyDown} type={inputType} className={className} placeholder={value} value={value} onChange={handleChange} required={isRequired}></input>
        <p hidden={!error} class="errors">{errorMessage}</p>
      </>;
  }
  else if (inputType == 'search') {
    returnTag =
      <>
        <input onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.searchStrToParent(e.target.value);
          }
        }} type="search" value={value} onChange={(e)=>setValue(e.target.value)} name="search-clients" class="in-search" />
      </>;
  }
  else if (inputType == 'checkbox') {
    returnTag =
      <>
        <label>{labelName}:</label>
        <input onChange={getCheckBoxChange} type="checkbox" id="checkbox" className={className} checked={value} onClick={() => setValue(!value)} />
      </>;
  }
  else if (inputType == 'radio') {
    returnTag =
      <>
        <label>{mainLabelName}:</label>
        <span className={inputType} >
          <label onClick={(e) => {setCheckedFirst(true); getRadioChange(firstLabelName)}} for={firstLabelName.replace(/\s+/g, '') + position}>{firstLabelName}:</label>
          <input onChange={(e) => {getRadioChange(e.target.value)}} type={inputType} onClick={(e) => setCheckedFirst(true)} checked={checkedFirst ? true : false} che value={firstLabelName.replace(/\s+/g, '')} name={mainLabelName.replace(/\s+/g, '') + position} id={firstLabelName.replace(/\s+/g, '') + position} />
        </span>
        <span className={inputType} >
          <label onClick={(e) => {setCheckedFirst(false);getRadioChange(secondLabelName)}} for={secondLabelName.replace(/\s+/g, '') + position}>{secondLabelName}:</label>
          <input onChange={(e) => {getRadioChange(e.target.value)}} type={inputType} onClick={(e) => setCheckedFirst(false)} checked={checkedFirst ? false : true} value={secondLabelName.replace(/\s+/g, '')} name={mainLabelName.replace(/\s+/g, '') + position} id={secondLabelName.replace(/\s+/g, '') + position} />
        </span>
      </>
  }
  else if (inputType == 'date') {
    returnTag =
      <>
        <label>{mainLabelName}:</label>
        <DatePicker dateFormat="yyyy-MM-dd" required={isRequired} selected={startDate} onChange={(date) => setStartDate(date)} />
      </>
  }


  function handleChange(event) {

    setValue(event.target.value);
    
    if (restrictionType == 'email') {
      validateEmail(event.target.value);
    }
    else if (restrictionType == 'numbersOnly') {
      validateNumbersOnly(event.target.value);
    }
    else if (isRequired) {
      validateEmpty(event.target.value);
    }

    getChange(event.target.value)

  }




  return (
    <>
      {returnTag}
    </>
  )

};
export default Input;