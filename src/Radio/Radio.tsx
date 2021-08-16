import React from 'react';
import { Radio } from '@material-ui/core';

export type radioprops={
    checked?:boolean;
    classes?:object;
    id?:string;
    name?:string;
    value?:any;
    color?:'default'
    | 'primary'
    | 'secondary';
}

export const DummyRadio=({checked,classes,id,name,value,color}:radioprops)=>{

    return(
<>
<Radio checked={checked} id={id} name={name} value={value} classes={classes} color={color}></Radio>

</>

    );

}