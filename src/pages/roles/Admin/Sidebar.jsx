// src/pages/roles/Admin/Sidebar.jsx
// src/pages/roles/Admin/Sidebar.jsx
import React, { useState } from 'react';
import { Box, VStack, Link, Icon, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaClipboardList, FaUser, FaTasks, FaMapMarkerAlt, FaChartBar, FaFileAlt, FaBox, FaRoute, FaFileContract, FaWarehouse, FaUsers, FaMapMarker } from 'react-icons/fa';

const Sidebar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleHover = (item) => {
        setHoveredItem(item);
    };

    const handleLeave = () => {
        setHoveredItem(null);
    };

    return (
        <Box width="200px" bg="#f5f5f5" p="6" height="55h" borderWidth={3}>
            <VStack align="start" spacing="4">
                <Button
                    as={RouterLink}
                    to="/admin/home"
                    onMouseOver={() => handleHover('Home')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'Home' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'Home' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaHome} mr="2" /> Home
                </Button>
                <Button
                    as={RouterLink}
                    to="/admin/attendance"
                    onMouseOver={() => handleHover('Attendance')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'Attendance' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'Attendance' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaClipboardList} mr="2" /> Attendance
                </Button>
                <Button
                    as={RouterLink}
                    to="/admin/profile"
                    onMouseOver={() => handleHover('Profile')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'Profile' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'Profile' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaUser} mr="2" /> Profile
                </Button>
                <Button
                    as={RouterLink}
                    to="/admin/leave-management"
                    onMouseOver={() => handleHover('Leave Mngmnt')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'Leave Mngmnt' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'Leave Mngmnt' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaTasks} mr="2" /> Leave Mngmnt
                </Button>
                <Button
                    as={RouterLink}
                    to="/admin/tasks"
                    onMouseOver={() => handleHover('Tasks')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'Tasks' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'Tasks' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaTasks} mr="2" /> Tasks
                </Button>
                <Button
                    as={RouterLink}
                    to="/admin/locations"
                    onMouseOver={() => handleHover('Locations')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'Locations' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'Locations' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaMapMarkerAlt} mr="2" /> Locations
                </Button>
                <Button
                    as={RouterLink}
                    to="/admin/reports"
                    onMouseOver={() => handleHover('Reports')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'Reports' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'Reports' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaChartBar} mr="2" /> Reports
                </Button>
                <Button
                    as={RouterLink}
                    to="/admin/applications"
                    onMouseOver={() => handleHover('Applications')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'Applications' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'Applications' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaFileAlt} mr="2" /> Applications
                </Button>
                <Button
                    as={RouterLink}
                    to="/admin/indents"
                    onMouseOver={() => handleHover('Indents')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'Indents' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'Indents' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaBox} mr="2" /> Indents
                </Button>
                <Button
                    as={RouterLink}
                    to="/admin/routing"
                    onMouseOver={() => handleHover('Routes')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'Routes' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'Routes' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaRoute} mr="2" /> Routes
                </Button>
                <Button
                    as={RouterLink}
                    to="/admin/contracts"
                    onMouseOver={() => handleHover('Contracts')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'Contracts' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'Contracts' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaFileContract} mr="2" /> Contracts
                </Button>
                <Button
                    as={RouterLink}
                    to="/admin/bmcs-cc"
                    onMouseOver={() => handleHover('BMCs & CC')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'BMCs & CC' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'BMCs & CC' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaWarehouse} mr="2" /> BMCs & CC
                </Button>
                <Button
                    as={RouterLink}
                    to="/admin/employees"
                    onMouseOver={() => handleHover('Employees')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'Employees' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'Employees' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaUsers} mr="2" /> Employees
                </Button>
                <Button
                    as={RouterLink}
                    to="/admin/places"
                    onMouseOver={() => handleHover('Places')}
                    onMouseLeave={handleLeave}
                    bg={hoveredItem === 'Places' ? 'gray' : 'transparent'}
                    color={hoveredItem === 'Places' ? 'white' : 'black'}
                    _hover={{ bg: 'teal.400', color: 'white' }}
                >
                    <Icon as={FaMapMarker} mr="2" /> Places
                </Button>
            </VStack>
        </Box>
    );
};

export default Sidebar;
// import React from 'react';
// import { Box, VStack, Link, Icon } from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';
// import { FaHome, FaClipboardList, FaUser, FaTasks, FaMapMarkerAlt, FaChartBar, FaFileAlt, FaBox, FaRoute, FaFileContract, FaWarehouse,FaUsers,FaMapMarker } from 'react-icons/fa';

// const Sidebar = () => {
//     return (
//         <Box width="200px" bg="#f5f5f5" p="6" height="75h" borderWidth={3}>
//             <VStack align="start" spacing="4">
//                 <Link as={RouterLink} to="/admin/home">
//                     <Icon as={FaHome} mr="2" /> Home
//                 </Link>
//                 <Link as={RouterLink} to="/admin/attendance">
//                     <Icon as={FaClipboardList} mr="2" /> Attendance
//                 </Link>
//                 <Link as={RouterLink} to="/admin/profile">
//                     <Icon as={FaUser} mr="2" /> Profile
//                 </Link>
//                 <Link as={RouterLink} to="/admin/leave-management">
//                     <Icon as={FaTasks} mr="2" /> Leave Mngmnt
//                 </Link>
//                 <Link as={RouterLink} to="/admin/tasks">
//                     <Icon as={FaTasks} mr="2" /> Tasks
//                 </Link>
//                 <Link as={RouterLink} to="/admin/locations">
//                     <Icon as={FaMapMarkerAlt} mr="2" /> Locations
//                 </Link>
//                 <Link as={RouterLink} to="/admin/reports">
//                     <Icon as={FaChartBar} mr="2" /> Reports
//                 </Link>
//                 <Link as={RouterLink} to="/admin/applications">
//                     <Icon as={FaFileAlt} mr="2" /> Applications
//                 </Link>
//                 <Link as={RouterLink} to="/admin/indents">
//                     <Icon as={FaBox} mr="2" /> Indents
//                 </Link>
//                 <Link as={RouterLink} to="/admin/routing">
//                     <Icon as={FaRoute} mr="2" /> Routes
//                 </Link>
//                 <Link as={RouterLink} to="/admin/contracts">
//                     <Icon as={FaFileContract} mr="2" /> Contracts
//                 </Link>
//                 <Link as={RouterLink} to="/admin/bmcs-cc">
//                     <Icon as={FaWarehouse} mr="2" /> BMCs & CC
//                 </Link>
//                 <Link as={RouterLink} to="/admin/employees">
//                     <Icon as={FaUsers} mr="2" /> Employees
//                 </Link>
//                 <Link as={RouterLink} to="/admin/places">
//                     <Icon as={FaMapMarker} mr="2" /> Places
//                 </Link>
//             </VStack>
//         </Box>
//     );
// };

// export default Sidebar;



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


