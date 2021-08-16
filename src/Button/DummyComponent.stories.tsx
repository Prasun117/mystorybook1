import React from 'react';
import { DummyButton } from "./Button";

export default {
  title: 'Dummy Component/Button',
  component: DummyButton,
};




export const PrimaryDefault = () => <DummyButton id="dummybutton"name="primary" className={'primary'} value={"button"} />;

export const SecondaryDefault = () => <DummyButton id="dummybutton"name="Secondary" className={'secondary'} value={"button"} />;

export const ThirdDefault = () => <DummyButton id="dummybutton"name="default" className="default" value={"button"} />;