function Contact() {
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
            <form action="">
              <label htmlFor="name"></label>
              <input id="name" type="text" placeholder="name" required />
              <label htmlFor="email"></label>
              <input id="email" type="email" placeholder="email" required />
              <label htmlFor="msg"></label>
              <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="10"
                required
                placeholder="message"
              ></textarea>

              <button type="submit">submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
