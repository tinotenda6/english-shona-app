'use client';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { useState } from 'react';
import ReactCardFlip from "react-card-flip";


// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
let values: number[] = [];

export default function Cards({ words }) {

  const theme = useTheme();
  const [flip, setFlip] = useState(false);
  const [index, setIndex] = useState(0);
  const [cardFront, setCardFront] = useState("Welcome, It's a good day today!");
  const [cardBack, setCardBack] = useState("Hesi, Nhasi izuva rakanaka kwazvo!");
  const [maxIndex, setMaxIndex] = useState(0);

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const nextCardClick = () => {
    if (index >= maxIndex) {
      setMaxIndex(index);
    }
    if (index >= maxIndex) {
      values.push(randomIntFromInterval(0, (words.length-1)));
    }

    setCardBack(words[values[index]].shona);
    setCardFront(words[values[index]].english);
    setIndex(index + 1);
  }
  const previousCardClick = () => {
    if (index > 1) {
      let val: number = index;
      val = val - 1;
      setCardBack(words[values[val - 1]].shona);
      setCardFront(words[values[val - 1]].english);
      setIndex(index - 1);
    }
  }

  return (
    <Container maxWidth="sm">
      <div onClick={() => { setFlip(!flip); }}>
        <ReactCardFlip isFlipped={flip}
          flipDirection="vertical">
          <div style={{
            height: '200px',
            background: '#d7fbda',
            fontSize: '40px',
            color: 'green',
            margin: '20px',
            borderRadius: '4px',
            textAlign: 'center',
            padding: '20px'
          }}>
            {cardFront}
          </div>
          <div style={{
            height: '200px',
            background: '#fbd7f8',
            fontSize: '40px',
            color: 'blue',
            margin: '20px',
            borderRadius: '4px',
            textAlign: 'center',
            padding: '20px'
          }}>
            {cardBack}
          </div>
        </ReactCardFlip>
      </div>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton aria-label="previous" onClick={previousCardClick}  >
          {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        <Typography>{index}/{index + 1}</Typography>
        <IconButton aria-label="next" onClick={nextCardClick}>
          {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton>
      </Box>

    </Container>
  );
}