// SCSS
import "./Header.scss";

// Images
import Group81 from "../../assets/Group 81.png";
import HeaderImg from "../../assets/Header Illustration.png";

const Header = () => {
  return (
    <header>
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
        <figure>
          <img src={Group81} alt="group of people" />
          <figcaption>
            1,600 people requested access a visit in last 24 hours
          </figcaption>
        </figure>
      </section>
      <img src={HeaderImg} alt="Header Ilustration" />
    </header>
  );
};

export default Header;
