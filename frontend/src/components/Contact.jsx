import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/contact/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          message: ""
        });
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
      alert("Server error");
    }

  };

  return (
    <div className="contact-page">

      <div className="contact-card">

        <h1>Contact Us</h1>

        <p>
          Have a question or feedback? Send us a message.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;