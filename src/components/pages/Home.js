import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // Go to top of the page
    window.scrollTo(0, 0);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="page home-page">
      <div className="info">
        <h1 className="title">
          Learn Everything About All Units From <span>Age Of Empires</span>
        </h1>
        <Link to="/units" className="cta">
          <img src="./assets/axe.png" alt="Axe" /> See Units
        </Link>
      </div>
      <div
        className="img"
        style={{ backgroundImage: "url(./assets/home-bg.jpg)" }}
      ></div>
    </div>
  );
};

export default Home;
