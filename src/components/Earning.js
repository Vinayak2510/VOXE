import { Slider } from "@mui/material";
import { useState } from "react";

const Earning = () => {
  const [amount, setAmount] = useState(4000);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAmount(value);
  };
  return (
    <>
      <div>
        <div className="earning-container"> 
        <div className="font-xl-700">Creators Earning</div>
        <div className="font-s-700">Estimation</div>
        <div className="font-xxl-800">{`$${amount}`}</div>
        <div className="font-s-700">
          {"with [20K] subscribers at an estimated [amount] x day"}
        </div>
        <div className="slider">
          <Slider
            defaultValue={4000}
            min={0}
            max={16000}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={handleChange}
          />
        </div>
        </div>
      </div>
    </>
  );
};

export default Earning;
