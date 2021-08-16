import React from 'react';
import {DummyCheckbox} from './Checkbox';

export default {
    title: 'Dummy Component/Checkbox',
    component: DummyCheckbox,
  };

  export const CheckboxDefault= () => <DummyCheckbox checked={true} id="dummy" name="dummy" value="text" color='default'></DummyCheckbox>;
  export const CheckboxDefaultUnchecked= () => <DummyCheckbox checked={false} id="dummy" name="dummy" value="text" color='default'></DummyCheckbox>;
  export const CheckboxPrimary= () => <DummyCheckbox checked={true} id="dummy" name="dummy" value="text" color='primary'></DummyCheckbox>;
  