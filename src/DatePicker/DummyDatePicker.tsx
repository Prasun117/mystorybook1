import React from 'react';
import { TextField } from '@material-ui/core';

export type Dateprops={

}

export const DummyDatePicker=()=>{

    return(
        <>
         <TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue="2017-05-24"
    InputLabelProps={{
      shrink: true,
    }}
  />
        </>
    );
} 