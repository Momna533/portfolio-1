import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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
      setShowSuccess(true);
      console.log(result);
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      setSuccess(false);
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form__entry">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form__entry">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form__entry">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? "Sending..." : "Submit"}
        </button>{" "}
        {success && showSuccess && (
          <div className="success__message">email sent successfully</div>
        )}
      </form>
    </>
  );
}

export default Contact;
