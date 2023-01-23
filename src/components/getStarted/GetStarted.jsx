// SCSS
import "./GetStarted.scss";

// Image

import FeatureImg from "../../assets/Feature Image.png";

const GetStarted = () => {
  return (
    <figure className="feature__img__cont">
      <img src={FeatureImg} alt="Feature" className="feature__img" />
      <header className="feature__img__text">
        <h6>Request Early Access to Get Started</h6>
        <h3>The possibilities are beyond your imagination</h3>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </header>
    </figure>
  );
};

export default GetStarted;
