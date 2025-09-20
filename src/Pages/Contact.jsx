import React from "react";

function Contact() {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="username"
            required
            autoComplete="off"
          />
          <input
            type="email"
            className="form-control"
            placeholder="enter tour email id"
            name="email"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            className="form-control"
            rows="10"
            placeholder="enter your message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
