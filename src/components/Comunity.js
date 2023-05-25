import { Button } from "@mui/material";
import "../FirstPage/FirstPage.css";
import community from '../Images/community.png';

const Comunity = () => {
  return (
    <>
      <div className="join-comunity">
        <Button
          style={{
            backgroundColor: "#ffb580",
            color: "black",
            width: "147px",
            height: "42px",
            marginLeft: "5px",
          }}
          variant="contained"
        >
          Join the Community
        </Button>
      </div>
      <div className="behind-voxe">Who's Behind VOXE</div>
      <div className="community-image"><img src={community} alt=''/> </div>
    </>
  );
};

export default Comunity;
