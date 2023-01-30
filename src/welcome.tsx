'use client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Navbar from '../app/wordcard/Navbar';
// Todo: 
// 1. add the paper
// 2. add the links to the other pages
export default function Welcome() {
return (
    <>
    <Navbar/>
      <Paper variant="outlined" elevation={6} >
      
   
      <Typography variant="h1" align='center'  gutterBottom>
    Welcome Samantha! 
    </Typography>
    
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Words</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Here you get to learn new shona words in a quizlet like format. 
            <Link href="/wordcard">this page!</Link>
          </Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Phrases</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Other tools</Typography>
        </AccordionSummary>
      </Accordion>
    </Paper>
    </>
);
}