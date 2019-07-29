import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <blockquote>
        <p>
          This is a basic migraine headache tracking app. For use by those who
          need to keep a headache diary for their doctor.
        </p>
        <ul>
          <li>
            Version 1.1 will include a method to download or print a report for
            the doctor.
          </li>
          <li>
            Version 1.2 will include an "edit" button to edit data on each row.
            While it seems like a simple thing to add, I've been stuck on that
            for quite some time now, so I decided to go ahead and deploy the
            app, as it already has the basic functionality I want
          </li>
        </ul>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/jbhafner/migraine-tracker-client"
            >
              Github - Client
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://github.com/jbhafner/migraine-tracker-server"
              target="_blank"
            >
              Github - Server
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="http://brianhafner.info/migraine-tracker-create-frontend/"
              target="_blank"
            >
              Blog Post on Client - Still Working on it
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="http://brianhafner.info/migraine-tracker-create-backend/"
              target="_blank"
            >
              Blog Post on Creating and Deploying Server
            </a>
          </li>
        </ul>
      </blockquote>
    </div>
  );
};

export default About;
