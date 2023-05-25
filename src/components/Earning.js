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
        <div>
        <div className="creators">Creators Earning</div>
        <div className="estimation">Estimation</div>
        <div className="amount">{`$${amount}`}</div>
        <div className="amount-text">
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
        <div>
        <iframe
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameborder="0"
          allow="autoplay; encrypted-media"
          className="vedio"
          allowfullscreen
          title="video"
        />
        </div>
      </div>
    </>
  );
};

export default Earning;
