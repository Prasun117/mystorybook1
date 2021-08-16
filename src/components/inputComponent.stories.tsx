import React from "react";
import { text, boolean, select, object, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import MphDsmInputComponents from "./InputYComponent";
    
export default {
    title: "Input Component",
    parameters: {
        component: MphDsmInputComponents,
        decorators: [withKnobs]
    }
};

export const InputField = () => 
<MphDsmInputComponents
     label={text('label', 'Label Text')}
    // id="input-component"
     name={text('name','')}
     value={text('value', '')}
     placeholder={text('placeholder', 'Placeholder Text')}
     disabled={boolean('disabled', false)}
    // onChange={() => action('Value Changed')('Change')}
    // onBlur={() => action('On Blur')('Blur')}
/>;
