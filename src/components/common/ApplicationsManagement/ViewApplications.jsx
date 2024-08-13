import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const ViewApplications = () => {
  return (
    <div>
      <h1>Welcome to the ViewApllications Page</h1>
      <div>
            <Box>
                <Button colorScheme="red" mr={3} as={RouterLink} to="/admin/applications/payslips">PAY SLIPS</Button>
                <Button colorScheme="red"mr={3} as={RouterLink} to="/admin/applications/experience-letters">EXPERIENCE LETTER</Button>
                <Button colorScheme="red" mr={3} as={RouterLink} to="/admin/applications/lor">LOR</Button>
            </Box>
        </div>
    </div>
  )
}

export default ViewApplications;
