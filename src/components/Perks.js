import "../FirstPage/FirstPage.css";
import { Select, MenuItem } from "@mui/material";

const Perks = () => {
  return (
    <>
      <div className="perks">Perks & Benifits</div>
      <div className="creator-1">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
    </>
  );
};

export default Perks;
