import React from 'react';
import Checkbox from "./Checkbox";
import { text,numbers,boolean,withKnobs,select } from "@storybook/addon-knobs";

export default{
    title:'Checkbox',
    component:Checkbox,
    decorators:[withKnobs]
};

export const Checkbox_1 = () =><Checkbox isLabel={boolean('isLabel',false)} text={text('yoo','ajaja')}  position='left'></Checkbox>;
export const Checkbox_2 = () =><Checkbox isLabel={boolean('isLabel',false)} position='right'></Checkbox>;
export const Testobj = () =>{

    const label = 'Textposition';
const options = {
Left: 'left',
Right:'right'
};
const defaultValue = 'left';
const groupId = 'GROUP-ID1';

const value = select(label, options, defaultValue, groupId); 
return <Checkbox isLabel={boolean('isLabel',false)} position={value}></Checkbox>;
};
