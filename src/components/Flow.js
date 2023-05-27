import "../FirstPage/FirstPage.css";
import Perks from "./Perks";
import {ReactComponent as Arrow} from '../Images/arrow.svg';

const Flow = () => {
    return (<>
      <div className="flow-layout">
      <div className="step-1 font-xl-700">Step 1</div>
      <div  className="arrow-1"><Arrow /></div>
      <div className="register">Register</div>
      <div className="step-2 font-xl-700">Step 2</div>
      <div className="arrow-2 font-xl-700"></div>
      <div className="share-link">Share Your Link</div>
      <div className="step-3 font-xl-700">Step 3</div>
      <div className="arrow-3"> </div>
      <div className="invite-creators">Invite More Creators</div>
      <div className="step-4 font-xl-700">Step 4 <div className="achieve-benifits">Achieve Unique Benifits</div></div>
      <div className="perks"><Perks /></div>
      </div>
    </>)
}

export default Flow;