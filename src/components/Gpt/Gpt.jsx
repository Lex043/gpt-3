// SCSS
import "./Gpt.scss";

// Image

import rectangle from "../../assets/Rectangle 17.png";

const Gpt = () => {
  return (
    <section className="what__is__gpt3__cont">
      <div className="what__is__gpt3">
        <img src={rectangle} alt="rectangle" />
        <h1>What is GPT-3</h1>
        <p>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>

      <div className="explore__the__library">
        <h1>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <section className="what__is__gpt3__cont2">
        <div className="chatbots">
          <img src={rectangle} alt="rectangle" />
          <h1>Chatbots</h1>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.{" "}
          </p>
        </div>

        <div className="knowledgebase">
          <img src={rectangle} alt="rectangle" />
          <h1>Knowledgebase</h1>
          <p>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments
          </p>
        </div>

        <div className="education">
          <img src={rectangle} alt="rectangle" />
          <h1>Education</h1>
          <p>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
      </section>
    </section>
  );
};

export default Gpt;
