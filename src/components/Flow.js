import "../FirstPage/FirstPage.css";
import Perks from "./Perks";

const Flow = () => {
    return (<>
      <div className="flow-layout">
      <div className="step-1 step-font">Step 1</div>
      <div className="arrow-1"></div>
      <div className="register">Register</div>
      <div className="step-2 step-font">Step 2</div>
      <div className="arrow-2 step-font"></div>
      <div className="share-link">Share Your Link</div>
      <div className="step-3 step-font">Step 3</div>
      <div className="arrow-3"> </div>
      <div className="invite-creators">Invite More Creators</div>
      <div className="step-4 step-font">Step 4 <div className="achieve-benifits">Achieve Unique Benifits</div></div>
      <div className="perks"><Perks /></div>
      </div>
    </>)
}

export default Flow;