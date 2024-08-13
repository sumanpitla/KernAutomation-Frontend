import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AdminHome from '../components/common/HomeManagement/Home';
import Attendance from '../components/common/AttendanceManagement/Attendance';
import Profile from '../components/common/ProfileManagement/Profile';
import LeaveManagement from '../components/common/LeaveManagement/Leave';
import TaskAdd from '../components/common/TasksManagement/TaskAdd';


const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/attendance" element={<Attendance />} />
            <Route path="/admin/profile" element={<Profile />} />
            <Route path="/admin/leave-management" element={<LeaveManagement />} />
            <Route path="/admin/tasks" element={<TaskAdd />} />
        </Routes>
    );
};

export default AdminRoutes;
