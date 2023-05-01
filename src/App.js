import * as React from 'react';
import { BasicTabs } from './NavigationTabs';
import { CharacterNames } from './playableCharactersNoQuery';
import { Enemies } from './eemyCharactersNoQuery'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import './App.css';
import Image from './AlmTurnwhelStars.png'; // Import using relative path
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

const styles = {
  paperContainer: {
      class: 'thumbnail',
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top'
  }
};

function App() {
  return (
    <div className="App" style= {styles.paperContainer}>
      <ParallaxProvider style = {styles.paperContainer}>
        <React.Fragment>
          <CssBaseline />
          <BasicTabs />
          <Parallax speed={25} easing = {'easeInOut'}>
            <Grid2 container spacing={2} sx = {{mt: '2vmin'}}>
              <Grid2 xs={6}>
                <Container maxWidth = "xl">
                  <Box sx={{ border: '1vmin solid #6B4E23', bgcolor: '#C6BB71', height: '70vh', width: '100%'}}>
                    <Box sx={{ bgcolor: '#0A162B', height: '30%', width: '100%', margin: '0 auto'}}>
                  
                    </Box>
                    <Box sx={{ bgcolor: '#B2D0DA', height: 'fit-content', width: '95%', margin: '0 auto', padding: '2vmin' }}>
                    <CharacterNames />
                    </Box>
                  </Box>
                </Container>
              </Grid2>
              <Grid2 xs={6}>
                <Container maxWidth = "xl">
                  <Box sx={{ border: '1vmin solid #6B4E23', bgcolor: '#C6BB71', height: '70vh', width: '100%'}}>
                    <Box sx={{ bgcolor: '#0A162B', height: '30%', width: '100%', margin: '0 auto'}}>
                
                    </Box>
                    <Box sx={{ bgcolor: '#D9BFC5', height: 'fit-content', width: '95%', margin: '0 auto', padding: '2vmin' }}>
                    <Enemies />
                    </Box>
                  </Box>
                </Container>
              </Grid2>
              <Grid2 xs={12}>
                <Container maxWidth = "xl">
                <Box sx={{ border: '1vmin solid #6B4E23', bgcolor: '#C6BB71', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', height: '40vh', width: '100%', overflow: 'scroll' }}>
                    <Box sx={{ bgcolor: '#D9BFC5', height: '100%', width: '100%', margin: '0 auto'}}>
                
                    </Box>
                    <Box sx={{ bgcolor: '#B2D0DA', height: '100%', width: '100%', margin: '0 auto', padding: '2vmin' }}>
                    
                    </Box>
                  </Box>
                </Container>
              </Grid2>
            </Grid2>
        </Parallax>
        </React.Fragment>
      </ParallaxProvider>
    </div>
  );
}

export default App;