import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const result = await emailjs.sendForm(
        "service_xttu0tr",
        "template_yk7jr5c",
        e.target,
        "bxtHcJqr5ICGbHnJW"
      );
      setSuccess(true);
      console.log(result);
    } catch (error) {
      setSuccess(false);
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact_content">
          <div className="contact_content_left">
            <h2>Contact me</h2>
            <div className="underline"></div>
            <div className="conact_content_left_entries">
              <div className="contact_content_left_entry">
                <div className="icon"></div>
                <div>Samundri,Faisalabad,Punjab,Pakistan</div>
              </div>
              <div className="contact_content_left_entry">
                <div className="icon"></div>
                <div>03377251311</div>
              </div>
              <div className="contact_content_left_entry">
                <div className="icon"></div>
                <div>momna533gb@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="contact_content_right">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button type="submit" disabled={isProcessing}>
                {isProcessing ? "Sending..." : "Submit"}
              </button>{" "}
            </form>
            {success && (
              <div className="contact_content_right_success">
                email sent successfully
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
