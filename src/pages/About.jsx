// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center text-light bg-black p-3 rounded">About Me</h1>

      <div className="card shadow p-4 mt-4">
        <h2 className="text-center text-primary mb-3">Hi, I'm Dhiraj Kumar 👋</h2>

        <p>
          I'm a <strong>Computer Science graduate</strong> from 
          <strong> IES College of Technology, Bhopal</strong>, with a deep passion for 
          creating clean, modern, and responsive web interfaces. My goal is to build 
          websites that look beautiful and perform efficiently on every device.
        </p>

        <p>
          I have hands-on experience as a 
          <strong> Front-end Developer Intern at LeopardRuns Innovation & Technology</strong>, 
          where I worked on real-world projects using <strong>HTML, CSS, JavaScript</strong>, 
          and explored <strong>React.js</strong> to develop scalable applications.
        </p>

        <p>
          Over time, I’ve built multiple live projects, including:
        </p>
        <ul>
          <li>
            🛍️ <a href="https://shopper-website1.vercel.app/" target="_blank" rel="noreferrer">Shopper E-Commerce Website</a> – A responsive e-commerce platform with live API integration.
          </li>
          <li>
            🚗 <a href="https://car-rent-website-me.vercel.app/" target="_blank" rel="noreferrer">Car Rental Website</a> – A sleek, mobile-friendly site for booking cars online.
          </li>
          <li>
            🌐 <a href="https://dhira-j.github.io/portfolio/" target="_blank" rel="noreferrer">Portfolio Website</a> – My personal portfolio showcasing my projects and skills.
          </li>
        </ul>

        <p>
          I’m skilled in <strong>HTML, CSS, JavaScript, Bootstrap, and C++</strong>, with a 
          solid foundation in <strong>Data Structures and Algorithms</strong>. I love 
          designing user-friendly layouts and writing clean, maintainable code.
        </p>

        <p className="text-muted">
          You can find more about me or connect here:
        </p>
        <ul>
          <li>
            💼 <a href="https://www.linkedin.com/in/dhirajsinghcpr" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            🌐 <a href="https://dhira-j.github.io/portfolio/" target="_blank" rel="noreferrer">My Portfolio</a>
          </li>
          <li>
            📧 <a href="mailto:dhirajsingh76310@gmail.com">dhirajsingh76310@gmail.com</a>
          </li>
        </ul>

        <hr />

        <h5 className="text-center text-success mt-4">
          💡 This website is designed and developed by <strong>Dhiraj Kumar</strong>.
        </h5>
      </div>
    </div>
  );
};

export default About;
