import * as React from 'react';
import { BasicTabs } from './NavigationTabs';
import { CharacterNames } from './playableCharactersNoQuery';
import { Enemies } from './eemyCharactersNoQuery'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import './App.css';

function App() {
  return (
    <div className="App">
      <BasicTabs />
      <React.Fragment>
        <CssBaseline />
        <Grid2 container spacing={2} sx = {{mt: '2vmin'}}>
          <Grid2 xs={6}>
            <Container maxWidth = "xl">
              <Box sx={{ bgcolor: '#cfe8fc', height: '70vh', width: '100%'}}>
                <Box sx={{ bgcolor: '#cf0f0f', height: '30%', width: '100%', margin: '0 auto'}}>
              
                </Box>
                <Box sx={{ bgcolor: '#ff0f0f', height: 'fit-content', width: '95%', margin: '0 auto', padding: '2vmin' }}>
                <CharacterNames />
                </Box>
              </Box>
            </Container>
          </Grid2>
          <Grid2 xs={6}>
            <Container maxWidth = "xl">
              <Box sx={{ bgcolor: '#cfe8fc', height: '70vh', width: '100%'}}>
                <Box sx={{ bgcolor: '#cf0f0f', height: '30%', width: '100%', margin: '0 auto'}}>
            
                </Box>
                <Box sx={{ bgcolor: '#ff0f0f', height: 'fit-content', width: '95%', margin: '0 auto', padding: '2vmin' }}>
                <Enemies />
                </Box>
              </Box>
            </Container>
          </Grid2>
          <Grid2 xs={12}>
            <Container maxWidth = "xl">
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', bgcolor: '#cfe8fc', height: '40vh', width: '100%', overflow: 'scroll' }}>
                <Box sx={{ bgcolor: '#cf0f0f', height: '100%', width: '100%', margin: '0 auto'}}>
            
                </Box>
                <Box sx={{ bgcolor: '#ff0f0f', height: '100%', width: '100%', margin: '0 auto', padding: '2vmin' }}>
                
                </Box>
              </Box>
            </Container>
          </Grid2>
        </Grid2>
      </React.Fragment>
    </div>
  );
}

export default App;