import "./Footer.scss";

import logo from "../../assets/GPT-3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__first__section">
        <h1>Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>

        <section className="footer__links">
          <figure className="footer__logo">
            <img src={logo} alt="GPT-3 logo" />
            <p className="footer__logo__cap">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </p>
          </figure>

          <ul>
            <li className="links">Links</li>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>

          <ul>
            <li className="company">Company</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>

          <ul>
            <li className="get__in__touch">Get in touch</li>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </section>
      </section>
      <p className="copyright">© 2021 GPT-3. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
