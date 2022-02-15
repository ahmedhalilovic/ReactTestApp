import React, { Component } from 'react';
import './style.css';
import Welcome from '../testing/Box1';
import DangerButton from '../testing/Button';
import Toggle from '../testing/Box3';
import ShowAlert from '../testing/Box4';
import UsingFetch from '../testing/Box5';
import PutRequest from '../testing/Box6';

export default function App() {
  return (
    <div>
      <Welcome name="Ahmed" />
      <DangerButton />
      <Toggle />
      <ShowAlert />
      <br></br>
      <UsingFetch />
      <PutRequest />
    </div>
  );
}
