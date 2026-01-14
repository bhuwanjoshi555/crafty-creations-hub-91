import { useState } from "react";
import { MessageCircle, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const hours = [
    { day: "Mon", time: "09:00 a.m. – 06:00 p.m." },
    { day: "Tue", time: "09:00 a.m. – 06:00 p.m." },
    { day: "Wed", time: "09:00 a.m. – 06:00 p.m." },
    { day: "Thu", time: "09:00 a.m. – 06:00 p.m." },
    { day: "Fri", time: "09:00 a.m. – 06:00 p.m." },
    { day: "Sat", time: "09:00 a.m. – 06:00 p.m." },
    { day: "Sun", time: "Closed" }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-12">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h4 className="text-xl font-medium mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Drop us a line!
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input resize-none"
                />
              </div>
              <button type="submit" className="btn-primary">
                Send
              </button>
            </form>

            <div className="mt-8">
              <a 
                href="https://wa.me/16047816066" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5" />
                Message us on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Crafty Glass Ltd.
              </h4>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <p>15100 40 Avenue, Surrey, British Columbia V3Z 1E7, Canada</p>
              </div>
              <a 
                href="tel:6047816066" 
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors mt-3"
              >
                <Phone className="w-5 h-5" />
                604-781-6066
              </a>
            </div>

            <div>
              <h4 className="text-xl font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Hours
              </h4>
              <table className="hours-table">
                <tbody>
                  {hours.map((item, index) => (
                    <tr key={index}>
                      <td className="pr-8 text-foreground font-medium">{item.day}</td>
                      <td className="text-muted-foreground">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
