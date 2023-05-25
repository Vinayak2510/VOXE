import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../FirstPage/FirstPage.css";

const Questions = () => {
  const questions = [
    {
      Question: "Is my place right for Airbnb?",
      Answer: "Answer here!",
    },
    {
      Question: "Do i have to host all the time?",
      Answer: "Answer here!",
    },
    {
      Question: "How much should I interact with guests?",
      Answer: "Answer here!",
    },
    {
      Question: "Any tips on being a great Airbnb host?",
      Answer: "Answer here!",
    },
    {
      Question: "What are Airbnb fees?",
      Answer: "Answer here!",
    },
  ];
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        frameborder="0"
        allow="autoplay; encrypted-media"
        className="questions-vedio"
        allowfullscreen
        title="video"
      />
      <div className="questions">
        {questions.map((ques) => {
          return (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{ques.Question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{ques.Answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default Questions;
