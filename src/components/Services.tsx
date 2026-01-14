import glassRailingImg from "@/assets/glass-railing.jpg";
import showerDoorImg from "@/assets/shower-door.jpg";
import customMirrorImg from "@/assets/custom-mirror.jpg";
import { Instagram } from "lucide-react";

const services = [
  {
    title: "Glass Railing",
    image: glassRailingImg,
    features: [
      "We do interior and exterior glass railing.",
      "Exterior Glass Railings allows unobstructed view.",
      "High quality Stainless steel material for best results.",
      "You can choose from different designs like Stand off, shoe base, post, spigot and more.",
      "Comes with one year warranty on hardware and installation."
    ]
  },
  {
    title: "Shower Door",
    image: showerDoorImg,
    features: [
      "Made with 10 mm thick glass for extra durability.",
      "We have wide range of colours for hardware (black, chrome and many more).",
      "Comes with one year warranty on hardware and installation."
    ]
  },
  {
    title: "Custom Mirror",
    image: customMirrorImg,
    features: [
      "No mirror is too small or too big for us.",
      "We cover all your mirror needs like your gym, washroom, interior design and etc.",
      "They come in various designs.",
      "Comes with one year warranty on hardware and installation."
    ]
  }
];

const Services = () => {
  return (
    <section className="section-padding section-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">What we do</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img 
                src={service.image} 
                alt={service.title}
                className="service-card-image"
              />
              <div className="service-card-content">
                <h4 className="service-card-title">{service.title}</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a 
            href="https://www.instagram.com/crafty_glass_ltd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-5 h-5 text-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
