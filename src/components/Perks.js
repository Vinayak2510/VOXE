import "../FirstPage/FirstPage.css";
import { Select, MenuItem, InputLabel,FormControl } from "@mui/material";

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
          <div className={`creator-${index + 1}`}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{creator}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={creator}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      })}
    </>
  );
};

export default Perks;
