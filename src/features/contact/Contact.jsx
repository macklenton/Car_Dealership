import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
{/*add route */}
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Message:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <div>
        <h1>Contact Us</h1>
        <p>Get in touch with the AutoDrive team.</p>
      </div>

      <div>
        <div>
          <Mail size={24} />
          <h3>Email</h3>
          <p>support@autodrive.com</p>
        </div>

        <div>
          <Phone size={24} />
          <h3>Phone</h3>
          <p>+254 700 000 000</p>
        </div>

        <div>
          <MapPin size={24} />
          <h3>Location</h3>
          <p>Nairobi, Kenya</p>
        </div>
      </div>

      <div>
        <h2>Send Us a Message</h2>

        {submitted && <p>Your message has been submitted successfully!</p>}

        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter message subject"
              required
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
              required
            />
          </div>

          <button type="submit">
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
