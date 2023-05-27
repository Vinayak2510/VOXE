import { TextField, Button } from "@mui/material";
import "../FirstPage/FirstPage.css";

const JoinComunity = () => {
  return (
    <div className="join-community-container">
      <div className="name-field">
        <TextField
          id="standard-basic"
          label="Name"
          variant="outlined"
        />
      </div>
      <div className="surname-field">
        <TextField
          id="standard-basic"
          label="Surname"
          variant="outlined"
        />
      </div>
      <div className="best-email">
        <TextField
          id="standard-basic"
          label="Best Email"
          variant="outlined"
        />
      </div>
      <div className="button-1">
        <Button
          style={{
            backgroundColor: "#ffb580",
            color: "black",
            width: "147px",
            height: "42px",
          }}
          variant="contained"
        >
          JOIN
        </Button>
      </div>
    </div>
  );
};

export default JoinComunity;
