import "./home.css";
import Profile from "../../assets/profile.webp";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="profile" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Omar Danga. TEST</span> <br />{" "}
            <span className="weight-400">
              Front-End Developer & <br />
              Graphic Designer
            </span>
          </h1>

          <p className="home__description">
            Innovative, task-driven professional with 10+ years of experience in
            web design and development across diverse industries. Proficient in
            creating user interfaces, writing and testing codes, troubleshooting
            simple or complex issues, and implementing new features based on
            user feedback.
          </p>

          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
