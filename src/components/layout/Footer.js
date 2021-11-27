const Footer = () => {
  return (
    <footer className="footer">
      <a href="/" className="logo">
        <img src="./assets/logo-footer.png" alt="Logo" />
        <span>Age of Empires Units</span>
      </a>
      <p className="footer-msg">
        Made with <img src="/assets/heart.png" alt="Heart" /> by{" "}
        <a
          href="https://github.com/mehmetcanaygun"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mehmet Can Aygün
        </a>
      </p>
    </footer>
  );
};

export default Footer;
