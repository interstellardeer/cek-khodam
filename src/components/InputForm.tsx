import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import firstWords from '../data/firstWords.json';
import secondWords from '../data/secondWords.json';

interface InputFormProps {
  setUserName: (name: string) => void;
  setFunnyWords: (words: string[]) => void;
}

const InputForm: React.FC<InputFormProps> = ({ setUserName, setFunnyWords }) => {
  const [name, setName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setUserName(name);

    const randomFirstWord = firstWords[Math.floor(Math.random() * firstWords.length)];
    const randomSecondWord = secondWords[Math.floor(Math.random() * secondWords.length)];
    setFunnyWords([randomFirstWord, randomSecondWord]);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000); // prevent button spamming for 2 seconds
  };

  return (
    <Box textAlign="center" mt={2}>
      <TextField
        label="Tulis nama kamu di sini"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Checking...' : 'Check'}
      </Button>
    </Box>
  );
};

export default InputForm;
