import "./AppDownload.css";
import Googlestore from "../../assets/googleplay.png";
import PlayStore from "../../assets/AppStoree.png";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <h4>
        For Better Experience Download <br />
        Foodie App
      </h4>
      <div className="app-download-platforms">
        <img className="googlestore" src={Googlestore} alt="" />
        <img className="playstore" src={PlayStore} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
