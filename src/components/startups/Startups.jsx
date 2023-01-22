// SCSS
import "./Startups.scss";

// Images
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

const Startups = () => {
  return (
    <figure className="startups__icon">
      <img src={google} alt="google icon" className="startups__icon__img" />
      <img src={slack} alt="slack icon" className="startups__icon__img" />
      <img
        src={atlassian}
        alt="atlassian icon"
        className="startups__icon__img"
      />
      <img src={dropbox} alt="dropbox icon" className="startups__icon__img" />
      <img src={shopify} alt="shopify icon" className="startups__icon__img" />
    </figure>
  );
};

export default Startups;
