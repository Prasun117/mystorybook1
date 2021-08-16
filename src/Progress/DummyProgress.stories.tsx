import  React from 'react'
import {DummyCircularprogress} from './DummyProgress'

export default {
    title: 'Dummy Component/Progress',
    component: DummyCircularprogress,
  };

  export const PrimaryProgress= () => <DummyCircularprogress color='primary' variant='indeterminate'></DummyCircularprogress>;
  export const SecondaryProgress= () => <DummyCircularprogress color='secondary' variant='indeterminate'></DummyCircularprogress>;