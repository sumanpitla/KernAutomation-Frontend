import React from 'react';

import { Box, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
const Leave = () => {
    return (
        <div>
        <div>
            <h1>Welcome to the Leave component!</h1>
        </div>
        <div>
            <Box>
                <Button colorScheme="green" mr={3} as={RouterLink} to="/admin/leave-management/apply">Leave Apply</Button>
                <Button colorScheme="red" as={RouterLink} to="/admin/leave-management/approve">Approve Leaves</Button>
            </Box>
        </div>
        </div>
    );
};

export default Leave;