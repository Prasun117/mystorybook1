import React from "react";
import { CircularProgress } from '@material-ui/core';

export type Dummycircleprops={
color?:'inherit'
| 'primary'
| 'secondary';
value?:number;
variant?:'determinate'
| 'indeterminate'
| 'static';
}


export const DummyCircularprogress= ({color,value,variant}:Dummycircleprops) =>{

return(
    <>
    <CircularProgress color={color} value={value} variant={variant}></CircularProgress>
    </>
);
}