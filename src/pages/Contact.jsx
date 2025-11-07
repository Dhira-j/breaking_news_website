// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center text-light bg-black p-3 rounded">Contact Me</h1>

      <div className="card shadow p-4 mt-4">
        <p className="text-center text-secondary mb-4">
          I’d love to hear from you! Fill out the form below or use the contact
          details to get in touch.
        </p>

        {/* Basic contact form (does not send emails yet) */}
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Your Message</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>

        <hr className="my-4" />

        <div className="text-center">
          <h5 className="mb-3 text-dark">Contact Details</h5>
          <p>
            📧 <a href="mailto:dhirajsingh76310@gmail.com">dhirajsingh76310@gmail.com</a>
          </p>
          <p>
            💼{" "}
            <a
              href="https://www.linkedin.com/in/dhirajsinghcpr"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/dhirajsinghcpr
            </a>
          </p>
          <p>
            🌐{" "}
            <a
              href="https://dhira-j.github.io/portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              dhira-j.github.io/portfolio
            </a>
          </p>
        </div>

        <h6 className="text-center text-success mt-4">
          💡 Website designed & developed by <strong>Dhiraj Kumar</strong>.
        </h6>
      </div>
    </div>
  );
};

export default Contact;
