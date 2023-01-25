import "./Header.scss";

// Images
import Group81 from "../../assets/Group 81.png";
import HeaderImg from "../../assets/Illustration.png";

const Header = () => {
  return (
    <header className="header__cont">
      <img
        src={HeaderImg}
        alt="Header Ilustration"
        className="headerimg__ilustration"
      />

      <section className="header__text">
        <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed for traveling assistance indulgence unpleasing. Not thoughts
          all exercise blessings. Indulgence way everything joy alteration
          boisterous the attachement. Party we years to order allow asked of.
        </p>
        <form>
          <input
            className="header__form__input"
            type="text"
            placeholder="Your Email Addresss"
          />
          <button className="header__form__btn">Get Started</button>
        </form>
        <figure className="header__image__cont">
          <img className="header__image" src={Group81} alt="group of people" />
          <figcaption className="header__image__caption">
            1,600 people requested access a visit in last 24 hours
          </figcaption>
        </figure>
      </section>
    </header>
  );
};

export default Header;
