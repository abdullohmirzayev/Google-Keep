import { useContext } from 'react';

import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

// copmonents
import Form from './form';
import Note from './note';

import { DataContext } from '../../context/dataContext';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {

  const { notes } = useContext(DataContext);

  return (
    <>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box component='main' sx={{ p: 3, width: '100%' }}>
          <DrawerHeader />
          <Form />
          {
            notes.map(map => (
              <Note />
            ))
          }
        </Box>
      </Box>
    </>
  )
}

export default Notes