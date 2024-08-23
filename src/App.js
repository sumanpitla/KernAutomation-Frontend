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
//Task Management components
import Task from './components/common/TasksManagement/Tasks';
import NewTask from './components/common/TasksManagement/NewTask';
import CompletedTask from './components/common/TasksManagement/CompletedTask';
import PendingTask from './components/common/TasksManagement/PendingTask';
import TaskStatus from './components/common/TasksManagement/TaskStatus';

import Location from './components/common/LocationManagement/LiveLocations';
import Reports from './components/common/ReportsManagement/Reports';
import Routing from './components/common/RoutingManagement/Route';
import ViewApllications from './components/common/ApplicationsManagement/ViewApplications';
import PaySlips from './components/common/ApplicationsManagement/PaySlips';
import LOR from './components/common/ApplicationsManagement/ApplyLOR';
import ExpereinceLetters from './components/common/ApplicationsManagement/ApplyExperienceLetter';

//Indents Management
import Indents from './components/common/IndentsManagement/Indents';
import NewIndent from './components/common/IndentsManagement/NewIndent';
import ApproveDecline from './components/common/IndentsManagement/ApproveDecline';
import StatusPage from './components/common/IndentsManagement/StatusPage';
import Consumption from './components/common/IndentsManagement/Consumption';
import IndReports from './components/common/IndentsManagement/Reports';
import Return from './components/common/IndentsManagement/Return';

//adminSpecificComponents
import Contracts from './components/AdminSpecial/ContractsManagement/Contracts';
import BmcsCc from './components/AdminSpecial/BmcManagement/BmcsCc';
//Employee Management Routes
import HomePageEmployeesMangement from './components/AdminSpecial/EmployeesManagement/HomePageEmployeesMangement';
import CreateUser from './components/AdminSpecial/EmployeesManagement/CreateUser';
import AssignRole from './components/AdminSpecial/EmployeesManagement/AssignRole';
import GetPendingRoleUsers from './components/AdminSpecial/EmployeesManagement/GetPendingRoleUsers';
import GetUsers from './components/AdminSpecial/EmployeesManagement/GetUsers';
import MapUser from './components/AdminSpecial/EmployeesManagement/MapUser';
import CreateVillager from './components/AdminSpecial/EmployeesManagement/VillageLevel/CreateVillager';
import EditVillagers from './components/AdminSpecial/EmployeesManagement/VillageLevel/EditVillager';

//Places Management Routes
import HomePagePlacesManagement from './components/AdminSpecial/PlacesManagement/HomePagePlacesManagement';
import CreateState from './components/AdminSpecial/PlacesManagement/CreateState';
import GetStates from './components/AdminSpecial/PlacesManagement/GetStates';
import CreateDistrict from './components/AdminSpecial/PlacesManagement/CreateDistrict';
import GetDistricts from './components/AdminSpecial/PlacesManagement/GetDistricts';
import CreateCentre from './components/AdminSpecial/PlacesManagement/CreateCentre';
import GetCenters from './components/AdminSpecial/PlacesManagement/GetCenters';
import CreateVillage from './components/AdminSpecial/PlacesManagement/CreateVillage';
   //Milk Management sub in places management
import MilkEntry from './components/common/MilkManagement/MilkEntry';
import GetMilk from './components/common/MilkManagement/GetMilk';





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
          <Route path="/admin/tasks" element={<Task />} />
          <Route path="/admin/tasks/new" element={<NewTask />} />
          <Route path="/admin/tasks/completed" element={<CompletedTask />} />
          <Route path="/admin/tasks/pending" element={<PendingTask />} />
          <Route path="/admin/tasks/status" element={<TaskStatus />} />
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
          <Route path="/admin/indents/new" element={<NewIndent />} />
          <Route path="/admin/indents/approve-decline" element={<ApproveDecline />} />
          <Route path="/admin/indents/status" element={<StatusPage />} />
          <Route path="/admin/indents/consumption" element={<Consumption />} />
          <Route path="/admin/indents/reports" element={<IndReports />} />
          <Route path="/admin/indents/return" element={<Return />} />
          {/* //Routing Managemnet */}
          <Route path="/admin/routing" element={<Routing />} />
          {/* //Contracts Managemnet */}
          <Route path="/admin/contracts" element={<Contracts />} />
          {/* //BMCs & CC Managemnet */}
          <Route path="/admin/bmcs-cc" element={<BmcsCc />} />
          {/* //Employees Managemnet */}
          <Route path="/admin/employees" element={<HomePageEmployeesMangement />} />
          <Route path="/admin/employees/create" element={<CreateUser />} />
          <Route path="/admin/employees/assign-role" element={<AssignRole />} />
          <Route path="/admin/employees/pending-role" element={<GetPendingRoleUsers />} />
          <Route path="/admin/employees/get-users" element={<GetUsers />} />
          <Route path="/admin/employees/map-user" element={<MapUser />} />
          <Route path="/admin/employees/create-villager" element={<CreateVillager />} />
          <Route path="/admin/employees/edit-villager" element={<EditVillagers />} />
          {/* //Places Managemnet */}
          <Route path="/admin/places" element={<HomePagePlacesManagement />} />
          <Route path="/admin/places/create-state" element={<CreateState />} />
          <Route path="/admin/places/get-states" element={<GetStates />} />
          <Route path="/admin/places/create-district" element={<CreateDistrict />} />
          <Route path="/admin/places/get-districts" element={<GetDistricts />} />
          <Route path="/admin/places/create-centre" element={<CreateCentre />} />
          <Route path="/admin/places/get-centers" element={<GetCenters />} />
          <Route path="/admin/places/create-village" element={<CreateVillage />} />
          {/* milk mangment sub in place mangmnt */}
          <Route path="milk/milk-entry" element={<MilkEntry />} />
          <Route path="milk/get-milk" element={<GetMilk />} />
          
      
      
    </Routes>
  </Router>
);

export default App;
