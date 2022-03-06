import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../style.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul id="UlLayout">
          <li id="LiLayout">
            <Link to="/">Home</Link>
          </li>
          <li id="LiLayout">
            <Link to="/dataLogs">Data Logs</Link>
          </li>
          <li id="LiLayout">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </>
  );
};

export default Layout;
