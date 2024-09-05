import * as React from "react";
import Layout from "../components/layout";

const HomePage = () => {
  return (
    <Layout pageTitle="Welcome to Our Law Firm">
      <section>
        <h2>Experienced Lawyers, Proven Results</h2>
        <p>
          With years of experience in various fields of law, we have a proven
          track record of success. Our firm specializes in family law, personal
          injury, criminal defense, and civil litigation. We pride ourselves on
          offering personal attention and effective representation for every
          client.
        </p>
      </section>
      <section>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Extensive Legal Knowledge</li>
          <li>Personalized Client Focus</li>
          <li>Strong Negotiation and Litigation Skills</li>
          <li>Compassionate and Understanding Approach</li>
        </ul>
      </section>
      <section>
        <h2>Contact Us Today</h2>
        <p>
          Let us help you with your legal issues. Call us at (555) 123-4567 or
          fill out our <a href="/contact-us">contact form</a> to schedule a
          consultation.
        </p>
      </section>
    </Layout>
  );
};

export default HomePage;
