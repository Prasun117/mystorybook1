import React from  'react';
import {  DummyChip} from "./DummyChip";

export default {
    title: 'Dummy Component/Chip',
    component: DummyChip,
  };

  export const DefaultChip = () =><DummyChip label='default' color='default' ></DummyChip>;
  export const PrimaryChip = () =><DummyChip label='primary' color='primary' ></DummyChip>;
  export const MediumChip = () =><DummyChip label='default medium' color='default' size='medium'></DummyChip>;