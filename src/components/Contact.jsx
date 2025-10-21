export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you! Your message has been sent successfully.");
    e.target.reset();
  };

  return (
    <section id="contact-section">
      <h2>📞 Contact Us</h2>
      <p>We’d love to hear from you! Please reach out via any of the options below:</p>

      <div className="contact-details">
        <p><b>Email:</b> support@fakestore.com</p>
        <p><b>Phone:</b> +1 (800) 123-4567</p>
        <p><b>Address:</b> 123 Market Street, New York, NY 10001</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </section>
  );
}
