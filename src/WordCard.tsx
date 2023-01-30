import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}


const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
async function getDataWords() {
  const res = await fetch(`http://localhost:8000`,  { next: { revalidate: 86400 } });
   // Recommendation: handle errors
   if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}


export default async function WordCard() {
  
  const words = await getDataWords();
  const [cardText, setCardText] = useState('gete');
  const [expanded, setExpanded] = React.useState(false);
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCardClick =() =>{
    setCardText("chingwa");
  };

  return (
    <div style={{cursor:'pointer'}} onClick={handleCardClick}>
    <Card sx={{ maxWidth: 345 }}>   
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {cardText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"      >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
    </Card>
    </div>
  );
}