import React, { useRef } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import html2canvas from 'html2canvas';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface OutputCardProps {
  userName: string;
  funnyWords: string[];
}

const gradients = [
  'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  'linear-gradient(45deg, #66BB6A 30%, #B2FF59 90%)',
  'linear-gradient(45deg, #AB47BC 30%, #8E24AA 90%)'
];

const getRandomGradient = () => {
  return gradients[Math.floor(Math.random() * gradients.length)];
};

const GradientBox = styled.div`
  height: 100px;
  border-radius: 8px 8px 0 0;
  background: ${getRandomGradient()};
  
`;

const OutputCard: React.FC<OutputCardProps> = ({ userName, funnyWords }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleShare = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      const imgData = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'funny-card.png';
      link.click();
    }
  };

  return (
    <Box textAlign="center" mt={4}>
      <Card ref={cardRef} sx={{ maxWidth: 400, margin: '0 auto', borderRadius: 2 ,boxShadow: `0 0 20px rgba(0,0,0,0.5), 0 0 30px ${gradients}`,
}}>
        <GradientBox />
        <CardContent>
          <Typography variant="h5" component="div" sx={{ marginTop: 2 }}>
            Khodam {userName} adalah:
          </Typography>
          
          <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', marginTop: 2 }}>
            {funnyWords.join(' ')}
          </Typography>
        </CardContent>
      </Card>
      <Button variant="contained" color="secondary" onClick={handleShare} sx={{ mt: 2 }}>
        Share
      </Button>

      <Typography variant= "h6" component="div" sx={{ mt: 2 }}>
        Sosok {funnyWords.join(' ')} adalah jiwa sejati yang ada pada diri anda yang terdalam
      </Typography>
    </Box>
  );
};

export default OutputCard;
