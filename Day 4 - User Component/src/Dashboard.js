import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './Dashboard.css';
import Orders from './pages/Orders';

function Dashboard () {
  return(
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="/dashboard" element={< Orders/>} />
                  <Route exact path="/dashboard/courses" element={<div></div>} />
                  <Route exact path="/dashboard/fees" element={< Orders/>} />
                  <Route exact path="/dashboard/inquiries" element={<div></div>} />
                  <Route exact path="/dashboard/profile" element={<div></div>} />
              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default Dashboard;