import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../style.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="UlLayout">
          <li className="LiLayout">
            <Link to="/">Home</Link>
          </li>
          <li className="LiLayout">
            <Link to="/dataLogs">Data Logs</Link>
          </li>
          <li className="LiLayout">
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
