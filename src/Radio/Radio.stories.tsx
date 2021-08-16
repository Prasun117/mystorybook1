import React from 'react';
import { DummyRadio } from  './Radio';

export default {
    title: 'Dummy Component/Radio',
    component: DummyRadio,
  };

  export const RadioDefault= () => <DummyRadio checked={true} id="dummy" name="dummy" value="text" color='default'></DummyRadio>;
  export const RadioDefaultUnchecked= () => <DummyRadio checked={false} id="dummy" name="dummy" value="text" color='default'></DummyRadio>;
  export const RadioPrimary= () => <DummyRadio checked={true} id="dummy" name="dummy" value="text" color='primary'></DummyRadio>;
  