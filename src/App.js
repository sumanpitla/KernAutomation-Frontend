// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/Login';
import AdminPage from './pages/roles/Admin/AdminPage';

//common components
import AdminHome from './components/common/HomeManagement/Home';
import Attendance from './components/common/AttendanceManagement/Attendance';
import Profile from './components/common/ProfileManagement/Profile';
import LeaveManagement from './components/common/LeaveManagement/Leave';
import ApplyLeave from './components/common/LeaveManagement/ApplyLeave';
import ApproveLeave from './components/common/LeaveManagement/ApproveLeave';
import TaskAdd from './components/common/TasksManagement/TaskAdd';
import Location from './components/common/LocationManagement/LiveLocations';
import Reports from './components/common/ReportsManagement/Reports';
import Routing from './components/common/RoutingManagement/Route';
import ViewApllications from './components/common/ApplicationsManagement/ViewApplications';
import PaySlips from './components/common/ApplicationsManagement/PaySlips';
import LOR from './components/common/ApplicationsManagement/ApplyLOR';
import ExpereinceLetters from './components/common/ApplicationsManagement/ApplyExperienceLetter';
import Indents from './components/common/IndentsManagement/Indents';

//adminSpecificComponents
import Contracts from './components/AdminSpecial/ContractsManagement/Contracts';
import BmcsCc from './components/AdminSpecial/BmcManagement/BmcsCc';

//import AdminRoutes from './Routes/AdminRoutes';
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminPage />} />

      {/* // <AdminRoutes /> */}
          {/* //Home Managemnet */}
          <Route path="/admin/home" element={<AdminHome />} />
          {/* //Attendance Managemnet */}
          <Route path="/admin/attendance" element={<Attendance />} />
          {/* //Profile Managemnet */}
          <Route path="/admin/profile" element={<Profile />} />
          {/* //leave Managemnet */}
          <Route path="/admin/leave-management" element={<LeaveManagement />} />
          <Route path="/admin/leave-management/apply" element={<ApplyLeave />} />
          <Route path="/admin/leave-management/approve" element={<ApproveLeave />} />
          {/* //Tasks Managemnet */}
          <Route path="/admin/tasks" element={<TaskAdd />} />
          {/* //Location Managemnet */}
          <Route path="/admin/locations" element={<Location />} />
          {/* //Reports Managemnet */}
          <Route path="/admin/reports" element={<Reports />} />
          {/* //Applications Managemnet */}
          <Route path="/admin/applications" element={<ViewApllications />} />
          <Route path="/admin/applications/payslips" element={<PaySlips />} />
          <Route path="/admin/applications/experience-letters" element={<ExpereinceLetters />} />
          <Route path="/admin/applications/lor" element={<LOR />} />
          {/* //Indents Managemnet */}
          <Route path="/admin/indents" element={<Indents />} />
          {/* //Routing Managemnet */}
          <Route path="/admin/routing" element={<Routing />} />
          {/* //Contracts Managemnet */}
          <Route path="/admin/contracts" element={<Contracts />} />
          {/* //BMCs & CC Managemnet */}
          <Route path="/admin/bmcs-cc" element={<BmcsCc />} />
      
      
    </Routes>
  </Router>
);

export default App;
