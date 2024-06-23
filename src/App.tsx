import React, { useState } from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme, Typography, Box } from '@mui/material';
import InputForm from './components/InputForm';
import OutputCard from './components/OutputCard';
import Footer from './components/Footer';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [funnyWords, setFunnyWords] = useState<string[]>([]);
  const { width, height } = useWindowSize();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box textAlign="center" my={4}>
          <Typography variant="h3" component="h1" gutterBottom>
            Cek Khodam
          </Typography>
        </Box>
        <InputForm setUserName={setUserName} setFunnyWords={setFunnyWords} />
        {funnyWords.length > 0 && (
          <>
            <Confetti width={width} height={height} recycle={false} />
            <OutputCard userName={userName} funnyWords={funnyWords} />
          </>
        )}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
