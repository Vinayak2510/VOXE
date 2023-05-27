import "../FirstPage/FirstPage.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Perks = () => {
  const creators = [
    "5 Creators",
    "21 Creators",
    "84 Creators",
    "10 Creators",
    "42 Creators",
  ];
  return (
    <>
      <div className="perks">Perks & Benifits</div>
      {creators.map((creator, index) => {
        return (
          <div>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography><span style={{whiteSpace:'nowrap'}}>{creator}</span></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{'Benifits Here!'}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </>
  );
};

export default Perks;
