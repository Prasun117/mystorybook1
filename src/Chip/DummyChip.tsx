import React from 'react'
import { Chip } from '@material-ui/core';

export type chipprops={
    color?:'default'
    | 'primary'
    | 'secondary';

    size?:'medium'
    | 'small';
    variant?:'default'
    | 'outlined';
    label?:string;
}

export const DummyChip=({color,size,variant,label}:chipprops)=>{
return(
    <>
    <Chip color={color} size={size} variant={variant} label={label}></Chip>
    </>
);

}
