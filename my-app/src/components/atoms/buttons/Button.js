import React, { useEffect, useState } from "react";
import '../../../assets/css/style.css';

function Button(props) {
  const [formId, setFormId] = useState(props.formId);
  const [className, setClassName] = useState(props.className);
  const [name, setName] = useState(props.name);

  useEffect(() => {
    setFormId(props.formId);
    setClassName(props.className);
    setName(props.name);
  }, [props.formId, props.className, props.name, props.formId])

  const onClick = (e) => {
    props.onClick(e);
  }

  return (
    <>
      <a onClick={onClick} class={className} >{name}</a>
    </>
  )

};
export default Button;