// src/pages/roles/Admin/Sidebar.jsx
import React from 'react';
import { Box, VStack, Link, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaClipboardList, FaUser, FaTasks, FaMapMarkerAlt, FaChartBar, FaFileAlt, FaBox, FaRoute, FaFileContract, FaWarehouse,FaUsers,FaMapMarker } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <Box width="200px" bg="gray.100" p="4" height="80h">
            <VStack align="start" spacing="4">
                <Link as={RouterLink} to="/admin/home">
                    <Icon as={FaHome} mr="2" /> Home
                </Link>
                <Link as={RouterLink} to="/admin/attendance">
                    <Icon as={FaClipboardList} mr="2" /> Attendance
                </Link>
                <Link as={RouterLink} to="/admin/profile">
                    <Icon as={FaUser} mr="2" /> Profile
                </Link>
                <Link as={RouterLink} to="/admin/leave-management">
                    <Icon as={FaTasks} mr="2" /> Leave Management
                </Link>
                <Link as={RouterLink} to="/admin/tasks">
                    <Icon as={FaTasks} mr="2" /> Tasks
                </Link>
                <Link as={RouterLink} to="/admin/locations">
                    <Icon as={FaMapMarkerAlt} mr="2" /> Locations
                </Link>
                <Link as={RouterLink} to="/admin/reports">
                    <Icon as={FaChartBar} mr="2" /> Reports
                </Link>
                <Link as={RouterLink} to="/admin/applications">
                    <Icon as={FaFileAlt} mr="2" /> Applications
                </Link>
                <Link as={RouterLink} to="/admin/indents">
                    <Icon as={FaBox} mr="2" /> Indents
                </Link>
                <Link as={RouterLink} to="/admin/routing">
                    <Icon as={FaRoute} mr="2" /> Routes
                </Link>
                <Link as={RouterLink} to="/admin/contracts">
                    <Icon as={FaFileContract} mr="2" /> Contracts
                </Link>
                <Link as={RouterLink} to="/admin/bmcs-cc">
                    <Icon as={FaWarehouse} mr="2" /> BMCs & CC
                </Link>
                <Link as={RouterLink} to="/admin/employees">
                    <Icon as={FaUsers} mr="2" /> Employees
                </Link>
                <Link as={RouterLink} to="/admin/places">
                    <Icon as={FaMapMarker} mr="2" /> Places
                </Link>
            </VStack>
        </Box>
    );
};

export default Sidebar;



// import React from 'react';
// import { Box, VStack, Link } from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';

// const Sidebar = () => {
//     return (
//         <Box width="200px" bg="gray.100" p="4">
//             <VStack align="start" spacing="4">
//                 <Link as={RouterLink} to="/admin/home">Home</Link>
//                 <Link as={RouterLink} to="/admin/attendance">Attendance</Link>
//                 <Link as={RouterLink} to="/admin/profile">Profile</Link>
//                 <Link as={RouterLink} to="/admin/leave-management">Leave Management</Link>
//                 <Link as={RouterLink} to="/admin/tasks">Tasks</Link>
//                 <Link as={RouterLink} to="/admin/locations">Locations</Link>
//                 <Link as={RouterLink} to="/admin/reports">Reports</Link>
//                 <Link as={RouterLink} to="/admin/applications">Applications</Link>
//                 <Link as={RouterLink} to="/admin/indents">Indents</Link>
//                 <Link as={RouterLink} to="/admin/routing">Routing</Link>
//                 <Link as={RouterLink} to="/admin/contracts">Contracts</Link>
//                 <Link as={RouterLink} to="/admin/bmcs-cc">BMCs & CC</Link>

//             </VStack>
//         </Box>
//     );
// };

// export default Sidebar;


