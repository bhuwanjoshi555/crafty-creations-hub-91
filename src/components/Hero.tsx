import heroImage from "@/assets/hero-stairs.jpg";

const Hero = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay" />
    </section>
  );
};

export default Hero;
