import React,{useState} from 'react'
import './Checkbox.css';

export default function Checkbox(props) {

    const[position,setPosition]=useState(props.position);
  


var checkbox;
if(position=='left'){

    checkbox=(
        <React.Fragment>
    <input type="checkbox" value=""></input>
    <label className={props.isLabel?'right disable':'right'}>checkbox</label>
    </React.Fragment>);
    console.log(props.position);
}

else if(position=='right'){
    checkbox=(
        <React.Fragment>
    <label className={props.isLabel?'right disable':'right'}>checkbox</label>
    <input type="checkbox" value=""></input>
   
    </React.Fragment>);
    console.log(props.position);
}

    return (
        <div >
            {/* <label>left </label>
            <input type="checkbox" value="left" onChange={handleChange}></input>
            <label>right</label>
            <input type="checkbox" value="right" onChange={handleChange}></input> */}
            
            
           {checkbox}
            
            
        </div>
    )
}
