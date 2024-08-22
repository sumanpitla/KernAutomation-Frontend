// import React, { useContext, useEffect, useState } from 'react';
// import { UserContext } from '../../context/UserContext'; // Assuming UserContext is in the same directory
// import { Box, Button, VStack, Text } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const BmcsCc = () => {
//   const { userData } = useContext(UserContext);
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState({});
//   const [centers, setCenters] = useState({});
//   const navigate = useNavigate();
//    userData.role = 'Admin'; // Assume userData.role is 'Admin'
//   useEffect(() => {
//     if (userData.role === 'Admin' || userData.userId === 1) {
//       fetchStates();
//     } else if (userData.role === 'State Head' || userData.userId === 2) {
//       fetchDistricts();
//     } else if (userData.role === 'District Head' || userData.userId === 3) {
//       fetchDistricts(); // District Head also starts from districts
//     }
//   }, [userData]);

//   const fetchStates = async () => {
//     try {
//       const response = await axios.get('https://kernn.azurewebsites.net/api/get_state');
//       setStates(response.data);
//     } catch (error) {
//       console.error('Error fetching states:', error);
//     }
//   };

//   const fetchDistricts = async (stateName) => {
//     try {
//       const response = await axios.post('https://kernn.azurewebsites.net/api/get_districts', { state_name: stateName });
//       setDistricts((prevDistricts) => ({ ...prevDistricts, [stateName]: response.data }));
//     } catch (error) {
//       console.error('Error fetching districts:', error);
//     }
//   };

//   const fetchCenters = async (districtName) => {
//     try {
//       const response = await axios.post('https://kernn.azurewebsites.net/api/get_centres', { district_name: districtName });
//       setCenters((prevCenters) => ({ ...prevCenters, [districtName]: response.data }));
//     } catch (error) {
//       console.error('Error fetching centers:', error);
//     }
//   };

//   const handleStateClick = (stateName) => {
//     if (!districts[stateName]) {
//       fetchDistricts(stateName);
//     }
//   };

//   const handleDistrictClick = (districtName) => {
//     if (!centers[districtName]) {
//       fetchCenters(districtName);
//     }
//   };

//   const handleCenterClick = (stateName, districtName, centerName) => {
//     navigate(`/bmc&cc/${stateName}/${districtName}/${centerName}`);
//   };

//   return (
//     <VStack spacing={4} align="start">
//       {userData.role === 'Admin' || userData.userId === 1 ? (
//         states.map((state) => (
//           <Box key={state.state_name}>
//             <Button colorScheme="blue" onClick={() => handleStateClick(state.state_name)}>
//               {state.state_name}
//             </Button>
//             {districts[state.state_name] &&
//               districts[state.state_name].map((district) => (
//                 <Box key={district.district_name} pl={4}>
//                   <Button colorScheme="green" onClick={() => handleDistrictClick(district.district_name)}>
//                     {district.district_name}
//                   </Button>
//                   {centers[district.district_name] &&
//                     centers[district.district_name].map((center) => (
//                       <Box key={center.center_name} pl={4}>
//                         <Button colorScheme="red" onClick={() => handleCenterClick(state.state_name, district.district_name, center.center_name)}>
//                           {center.center_name}
//                         </Button>
//                       </Box>
//                     ))}
//                 </Box>
//               ))}
//           </Box>
//         ))
//       ) : (
//         <Text>No States to display</Text>
//       )}
//     </VStack>
//   );
// };

// export default BmcsCc;
import React, { useState, useEffect } from 'react';
import { Box, Button, VStack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const BmcsCc = () => {
  // Mock userData
  const userData = {
    role: 'Admin',      // Change this value as needed: 'Admin', 'State Head', 'District Head'
    userId: 1,          // Corresponding userId: 1 for Admin, 2 for State Head, 3 for District Head
    username: 'JohnDoe' // Additional mock data if needed
  };

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState({});
  const [centers, setCenters] = useState({});
  const navigate = useNavigate();

  // Mock data for demonstration purposes
  const mockStates = [
    { state_name: 'AndhraPradhesh' },
    { state_name: 'Telangana' },
    { state_name: 'TamilNadu' },
    { state_name: 'Kerala' },
    { state_name: 'Karnataka' },
  ];

  const mockDistricts = {
    AndhraPradhesh: [
      { district_name: 'District1' },
      { district_name: 'District2' },
    ],
    Telangana: [
      { district_name: 'District3' },
      { district_name: 'District4' },
    ],
    TamilNadu: [
      { district_name: 'District3' },
      { district_name: 'District4' },
    ],
    Kerala: [
      { district_name: 'District3' },
      { district_name: 'District4' },
    ],
    Karnataka: [
      { district_name: 'District3' },
      { district_name: 'District4' },
    ],
  };

  const mockCenters = {
    District1: [
      { center_name: 'Center1' },
      { center_name: 'Center2' },
    ],
    District2: [
      { center_name: 'Center3' },
      { center_name: 'Center4' },
    ],
    District3: [
      { center_name: 'Center5' },
      { center_name: 'Center6' },
    ],
    District4: [
      { center_name: 'Center7' },
      { center_name: 'Center8' },
    ],
  };

  useEffect(() => {
    if (userData.role === 'Admin' || userData.userId === 1) {
      fetchStates();
    } else if (userData.role === 'State Head' || userData.userId === 2) {
      fetchDistrictsForState('State1'); // Assuming State Head is responsible for 'State1'
    } else if (userData.role === 'District Head' || userData.userId === 3) {
      fetchCentersForDistrict('District1'); // Assuming District Head is responsible for 'District1'
    }
  }, [userData]);

  const fetchStates = () => {
    setStates(mockStates);
  };

  const fetchDistrictsForState = (stateName) => {
    setDistricts({ [stateName]: mockDistricts[stateName] });
  };

  const fetchCentersForDistrict = (districtName) => {
    setCenters({ [districtName]: mockCenters[districtName] });
  };

  const handleStateClick = (stateName) => {
    if (!districts[stateName]) {
      setDistricts((prev) => ({ ...prev, [stateName]: mockDistricts[stateName] }));
    }
  };

  const handleDistrictClick = (districtName) => {
    if (!centers[districtName]) {
      setCenters((prev) => ({ ...prev, [districtName]: mockCenters[districtName] }));
    }
  };

  const handleCenterClick = (stateName, districtName, centerName) => {
    navigate(`/bmc&cc/${stateName}/${districtName}/${centerName}`);
  };

  return (
    <VStack spacing={4} align="start">
      {userData.role === 'Admin' || userData.userId === 1 ? (
        states.map((state) => (
          <Box key={state.state_name}>
            <Button colorScheme="red" onClick={() => handleStateClick(state.state_name)}>
              {state.state_name}
            </Button>
            {districts[state.state_name] &&
              districts[state.state_name].map((district) => (
                <Box key={district.district_name} pl={4}>
                  <Button colorScheme="green" onClick={() => handleDistrictClick(district.district_name)}>
                    {district.district_name}
                  </Button>
                  {centers[district.district_name] &&
                    centers[district.district_name].map((center) => (
                      <Box key={center.center_name} pl={8}>
                        <Button
                          colorScheme="blue"
                          onClick={() => handleCenterClick(state.state_name, district.district_name, center.center_name)}
                        >
                          {center.center_name}
                        </Button>
                      </Box>
                    ))}
                </Box>
              ))}
          </Box>
        ))
      ) : userData.role === 'State Head' || userData.userId === 2 ? (
        Object.keys(districts).map((stateName) =>
          districts[stateName].map((district) => (
            <Box key={district.district_name}>
              <Button colorScheme="green" onClick={() => handleDistrictClick(district.district_name)}>
                {district.district_name}
              </Button>
              {centers[district.district_name] &&
                centers[district.district_name].map((center) => (
                  <Box key={center.center_name} pl={4}>
                    <Button
                      colorScheme="red"
                      onClick={() => handleCenterClick(stateName, district.district_name, center.center_name)}
                    >
                      {center.center_name}
                    </Button>
                  </Box>
                ))}
            </Box>
          ))
        )
      ) : userData.role === 'District Head' || userData.userId === 3 ? (
        Object.keys(centers).map((districtName) =>
          centers[districtName].map((center) => (
            <Box key={center.center_name}>
              <Button
                colorScheme="red"
                onClick={() => handleCenterClick('State1', districtName, center.center_name)}
              >
                {center.center_name}
              </Button>
            </Box>
          ))
        )
      ) : (
        <Text>No data available for your role.</Text>
      )}
    </VStack>
  );
};

export default BmcsCc;
