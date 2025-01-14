
import "../../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Share Meaningful <br />
          <span>Promises</span> With Your <br />
          Loved Ones
        </h1>
        <p className="hero-description">
          Create a personalized promise card to express your emotions and <br />
          strengthen your bond with someone special. Share your love in a <br /> unique way.
        </p>
        <button className="hero-button">Get Started</button>
        <div className="avatar-container">
  <div className="avatars">
    <img
      src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1736598510/african-woman-successful-entrepreneur-wearing-glasses-face-portrait_1_teb7bd.png"
      alt="User 1"
      className="avatar"
    />
    <img
      src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1736598509/african-woman-successful-entrepreneur-wearing-glasses-face-portrait_1_1_eecgr3.png"
      alt="User 2"
      className="avatar"
    />
    <img
      src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1736598501/R_3_1_fmctna.png"
      alt="User 3"
      className="avatar"
    />
  </div>
  <div className="rating">
    <span className="stars">⭐⭐⭐⭐</span>
    <span className="rating-number">4.5 ratings</span>
  </div>
</div>

      </div>

      
      {/* Hero Image */}
      <div className="hero-images">
        <img
          src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1736762062/iPhone_15_Pro_rnbbdr.png"
          alt="iPhone 15 Pro"
          className="hero-main-image"
        />
      </div>
    </section>
  );
};

export default Hero;
