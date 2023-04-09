import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

// copmonents
import Form from './form';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Form />
        </Box>
      </Box>
    </>
  )
}

export default Notes