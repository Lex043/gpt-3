import "./Blog.scss";

import firstBlogImg from "../../assets/Rectangle 22-4.png";
import secondBlogImg from "../../assets/Rectangle 22.png";
import thirdBlogImg from "../../assets/Rectangle 22-1.png";
import fourthBlogImg from "../../assets/Rectangle 22-2.png";
import fifthBlogImg from "../../assets/Rectangle 22-3.png";

const Blog = () => {
  return (
    <article className="blog__posts__cont">
      <figure className="first__blog__post">
        <img src={firstBlogImg} alt="first post" />
        <header>
          <p>Sept 26, 2021</p>
          <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
          <p>Read Full Article</p>
        </header>
      </figure>
      <section className="blog__posts__cont2">
        <figure className="second__blog__post">
          <img src={secondBlogImg} alt="second post" />
          <header>
            <p>Sep 26, 2021</p>
            <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
            <p>Read Full Article</p>
          </header>
        </figure>

        <figure className="third__blog__post">
          <img src={thirdBlogImg} alt="third post" />
          <header>
            <p>Sep 26, 2021</p>
            <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
            <p>Read Full Article</p>
          </header>
        </figure>

        <figure className="fourth__blog__post">
          <img src={fourthBlogImg} alt="fourth post" />
          <header>
            <p>Sep 26, 2021</p>
            <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
            <p>Read Full Article</p>
          </header>
        </figure>

        <figure className="fifth__blog__post">
          <img src={fifthBlogImg} alt="fifth post" />
          <header>
            <p>Sep 26, 2021</p>
            <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
            <p>Read Full Article</p>
          </header>
        </figure>
      </section>
    </article>
  );
};

export default Blog;
