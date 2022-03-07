import React from 'react';
import { DataStates } from '../DataStates';

const DataLogs = () => {
  return (
    <div>
      <h1>Data Logs</h1>
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Savings</th>
        </tr>
      </table>
      <DataStates />
    </div>
  );
};

export default DataLogs;
