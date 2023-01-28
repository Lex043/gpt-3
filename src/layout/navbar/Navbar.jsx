import { useState } from "react";
import "./Navbar.scss";

import logo from "../../assets/GPT-3.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar__cont">
      <img src={logo} alt="logo" className="navbar__logo" />
      <div
        className={showMenu ? "navbar__text responsive_nav" : "navbar__text"}
      >
        <a href="#home">Home</a>
        <a href="#wig">What is GPT?</a>
        <a href="#openai">Open AI</a>
        <a href="#casestudies">Case Studies</a>
        <a href="#library">Library</a>

        <section className="navbar__signin__signinup">
          <p>Sign in</p>
          <button className="signup">Sign up</button>
          <button onClick={() => setShowMenu(!showMenu)} className="close__btn">
            <img src={close} alt="close" />
          </button>
        </section>
      </div>
      <section className="navbar__signin__signinup2">
        <p>Sign in</p>
        <button className="signup2">Sign up</button>
        <button onClick={() => setShowMenu(!showMenu)} className="close__btn2">
          <img src={close} alt="close" />
        </button>
      </section>
      <button onClick={() => setShowMenu(!showMenu)} className="menu__btn">
        <img src={menu} alt="menu" />
      </button>
    </nav>
  );
};

export default Navbar;
