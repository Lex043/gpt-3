// SCSS
import "./TheFuture.scss";

// Images

import rectangle from "../../assets/Rectangle 17.png";

const TheFuture = () => {
  return (
    <section className="the__future__cont">
      <header className="the__future__header">
        <h1>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </header>

      <section className="the__future__cont2">
        <header className="improving__end">
          <figure>
            <img src={rectangle} alt="rectangle" />
            <h1>Improving end distrusts instantly</h1>
          </figure>
          <p>
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded.
          </p>
        </header>
        <header className="become__tended">
          <figure>
            <img src={rectangle} alt="rectangle" />
            <h1>Become the tended active</h1>
          </figure>
          <p>
            Considered sympathize ten uncommonly occasional assistance
            sufficient not. Letter of on become he tended active enable to.
          </p>
        </header>
        <header className="message__or__am__nothing">
          <figure>
            <img src={rectangle} alt="rectangle" />
            <h1>Message or am nothing</h1>
          </figure>
          <p>
            Led ask possible mistress relation elegance eat likewise debating.
            By message or am nothing amongst chiefly address.
          </p>
        </header>
        <header className="really__boy">
          <figure>
            <img src={rectangle} alt="rectangle" />
            <h1>Really boy law county</h1>
          </figure>
          <p>
            Really boy law county she unable her sister. Feet you off its like
            like six. Among sex are leave law built now. In built table in an
            rapid blush.
          </p>
        </header>
      </section>
    </section>
  );
};

export default TheFuture;
