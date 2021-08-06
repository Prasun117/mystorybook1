import React,{Fragment,useState} from 'react';
import { MphDsmInputComponentprops } from "./inputComponent.types";

const MphDsmInputComponents:React.FC<MphDsmInputComponentprops> = ({label, id, name, value,placeholder,type,disabled,onChange,onBlur}) =>{
const [inputValue, setValue]=useState(value||'');
const HandleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
console.log(value);
   let MY = event.target.value;
setValue(MY)
if(onChange)setValue(MY);
}
const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value)
    if(onBlur) setValue(value);
 }
 return (
    <Fragment>
       {label && <label data-testid='mph-input-label-data-test-id' htmlFor={id}>{label}</label>}
       <input 
          type={type || 'text'}
          data-testid='mph-input-data-test-id'
          id={id}
          name={name || id}
          value={value || 'YOO'}
          placeholder={placeholder}
          disabled={disabled}
          onChange={HandleChange}
          onBlur={handleBlur}
       />
    </Fragment>
 );
}

export default MphDsmInputComponents;