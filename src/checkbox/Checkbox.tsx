import React from 'react';

import {  Checkbox } from '@material-ui/core';

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

export const DummyCheckbox=({checked,classes,id,name,value,color}:radioprops)=>{

    return(
<>
<Checkbox checked={checked} id={id} name={name} value={value} classes={classes} color={color}></Checkbox>

</>

    );

}