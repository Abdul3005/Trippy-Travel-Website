import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose Your Destination</p>
        </div>

        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4> Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License </a>
          <a href="/">All Version</a>
        </div>

        <div>
          <h4> Community</h4>
          <a href="/">Git Hub</a>
          <a href="/">Issues</a>
          <a href="/">Project </a>
          <a href="/">Twitter</a>
        </div>

        <div>
          <h4> Help</h4>
          <a href="/">Supprt</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us </a>
        </div>

        <div>
          <h4> Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy</a>
          <a href="/">License </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
