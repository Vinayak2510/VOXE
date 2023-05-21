import "../FirstPage/FirstPage.css";
import Perks from "./Perks";

const Flow = () => {
    return (<>
        
      <div className="what-voxe">What's VOXE?</div>
      <div className="people-list"></div>
      <div className="step-1">Step 1</div>
      <div className="arrow-1"></div>
      <div className="step-2">Step 2</div>
      <div className="arrow-2"></div>
      <div className="step-3">Step 3</div>
      <div className="arrow-3"></div>
      <div className="step-4">Step 4</div>
      <div className="register">Register</div>
      <div className="share-link">Share Your Link</div>
      <div className="invite-creators">Invite More Creators</div>
      <div className="achieve-benifits">Achieve Unique Benifits</div>
      <Perks />
    </>)
}

export default Flow;