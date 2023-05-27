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
            width: "30%",
            height: "42px",
            marginBottom: '2%'
          }}
          variant="contained"
        >
          Join the Community
        </Button>
      </div>
      <div className="font-xl-700">Who's Behind VOXE</div>
      <div><img src={community}  className="community-image" alt=''/> </div>
    </>
  );
};

export default Comunity;
