import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    // Go to top of the page
    window.scrollTo(0, 0);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="page not-found-page">
      <div className="container">
        <p className="title">
          4<img src="/assets/axe.png" alt="Axe" />4
        </p>
        <p className="info">Page you're looking for could not be found...</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
