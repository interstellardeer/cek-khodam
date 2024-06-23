import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box textAlign="center" py={3} mt={5}>
      <Typography variant="body1">
        Made by{' '}
        <Link href="https://github.com/interstellardeer" target="_blank" rel="noopener noreferrer">
          Arsya
        </Link>{' '}
        with 💖 and React.js
      </Typography>
    </Box>
  );
};

export default Footer;
