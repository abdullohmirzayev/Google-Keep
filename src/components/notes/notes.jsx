import { useContext } from 'react';

import { styled } from '@mui/material/styles'
import { Box, Grid } from '@mui/material'

// copmonents
import Form from './form';
import Note from './note';
import EmptyNotes from './EmptyNotes';

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
            notes.length > 0 ?

              <Grid container style={{ marginTop: 16 }}>
                {
                  notes.map(notes => (
                    <Grid item>
                      <Note notes={notes} />
                    </Grid>
                  ))
                }
              </Grid>
              : <EmptyNotes />
          }
        </Box>
      </Box>
    </>
  )
}

export default Notes