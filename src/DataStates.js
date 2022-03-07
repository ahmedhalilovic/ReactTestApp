import React from 'react';
import './style.css';
import { dataStates } from './data';

export const DataStates = () => {
  return (
    <div className="states-container">
      {dataStates.map((data, key) => {
        return (
          <div key={key}>
            <DataState
              key={key}
              devName={data.devName}
              state={data.state}
              deviceState={data.deviceState}
              body={data.body}
            />
          </div>
        );
      })}
    </div>
  );
};

const DataState = ({ devName, state, deviceState, body }) => {
  if (!devName) return <div />;
  return (
    <table>
      <tr>
        <td>{devName}</td>
        <td>{state}</td>
        <td>{deviceState}</td>
        <td>{body}</td>
      </tr>
      <tr></tr>
    </table>
  );
};
