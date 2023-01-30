'use client';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function Cards({ words }) {

  //start of with a greeting

  const theme = useTheme();

  // React.useEffect(()=>setInd( randomIntFromInterval(0, words.length)), []);
  const [cardText, setCardText] = useState('Let\'s get started');
  const [initial, setInitial] = useState(true);
  const [flip, setFlip] = useState(false);
  const [index, setIndex] = useState(0);
  const [nextDisable, setNextDisable] = useState(false);

  const handleNextCardClick = () => {
    setInitial(false);
    if (initial && index != words.length) {

      setCardText(words[index].shona);
    }
    if (index == words.length) {
      setCardText("Makorokoto, wapedza");
      setNextDisable(true);
    }

  }
  const handleCardClick = () => {
    //enable next button
    // console.log("in",);
    if (index != words.length) {
      setCardText(words[index].english);
      setIndex(index + 1);
      setInitial(true);
    }
    if (index == words.length) {
      setCardText("Well Done, you're done");
      setInitial(true);

    }
  };

  return (
    <div style={{ cursor: 'pointer' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {cardText}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

            <IconButton aria-label="review" onClick={handleCardClick} disabled={initial}>
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next" onClick={handleNextCardClick} disabled={nextDisable}>
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </CardActions>

      </Card>
    </div>
  );
}