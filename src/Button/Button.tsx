/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from '@material-ui/core';
import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';




export type ButtonProps={
  id?:string;
  name?:string;
  className?: string;
  value?:string;
}



export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    primary: {
      display:'inline-block',
      color: '#fff',
      fontSize: '16px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      backgroundColor:' #4CAF50',
      padding: '15px 32px',
      textAlign:'center',
      margin:'4px 2px',
      cursor:'pointer'
    },
    secondary: {
        display:'inline-block',
        color: '#fff',
        fontSize: '16px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        backgroundColor:' #008CBA',
        padding: '15px 32px',
        textAlign:'center',
        margin:'4px 2px',
        cursor:'pointer'
      },
  }),
);


export const DummyButton=({id,name,className,value}:ButtonProps)=>{

const classes= useStyles();
return(
<>

<input type="button" name={name} id={id}  value ={value} className={className=='primary'?classes.primary:className=='secondary'?classes.secondary:''} />

</>

);

}