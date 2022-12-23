import { useEffect, useState } from 'react';

function Th(props) {
    const [column, setColumn] = useState(props.column);
    const [header, setHeader] = useState(props.header || props.column);
    const [isRequired, setIsRequired] = useState(props.isRequired);
    const redStar = <><sup class="red-star">*</sup></>

    useEffect(() => {
        setColumn(props.column);
        setHeader(props.header || props.column);
        setIsRequired(props.isRequired)
      }, [props])

    return column.map((data, index) => {
        let i = 0;
        return <th className='th-reports' key={data}>{header[index].charAt(0).toUpperCase() + header[index].slice(1)}{(isRequired != null && isRequired[index]) ? <sup class="red-star">*</sup> : <></>}</th>
    })

}
export default Th;