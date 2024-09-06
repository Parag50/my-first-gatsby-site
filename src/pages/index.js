import * as React from "react";
import Layout from "../components/layout";
import Accordion from "../components/Accordion";
import "./homePage.scss";

const HomePage = () => {
  const offenses = [
    {
      title: "Drug Offenses",
      content:
        "We defend against various drug-related charges, including possession, trafficking, and manufacturing. Our approach involves a thorough investigation to build a strong defense strategy.",
    },
    {
      title: "Theft and Burglary",
      content:
        "Our expertise covers theft, burglary, and larceny cases. We work to uncover evidence that supports your innocence and challenge the prosecution's case.",
    },
    {
      title: "Violent Crimes",
      content:
        "From assault to robbery, we provide robust defense strategies for violent crime allegations. We focus on mitigating factors and disputing any incriminating evidence.",
    },
    {
      title: "White-Collar Crimes",
      content:
        "We handle cases involving fraud, embezzlement, and other white-collar crimes. Our goal is to provide a strong defense to minimize the legal consequences.",
    },
    {
      title: "Sex Crimes",
      content:
        "We offer confidential and compassionate defense for sex crime charges, including sexual assault and harassment. We aim to protect your rights and privacy throughout the legal process.",
    },
  ];

  return (
    <Layout>
      <section className="hero">
        <video autoPlay loop muted playsInline>
          <source
            src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/hero-desktop.mp4?tr=q-95"
            type="video/mp4"
          />
        </video>
        <div className="heroContent">
          <h2>We Fight Harder For Our Clients</h2>
          <p>
            With years of experience in various fields of law, we have a proven
            track record of success. Our firm specializes in family law,
            personal injury, criminal defense, and civil litigation. We pride
            ourselves on offering personal attention and effective
            representation for every client.
          </p>
        </div>
      </section>

      <section className="defenseTypes">
        <div className="defenseTypesContent">
          <div className="typesList">
            <h2>Types of Criminal Offenses We Defend</h2>
            <ul>
              {offenses.map((offense, index) => (
                <li key={index}>{offense.title}</li>
              ))}
            </ul>
          </div>
          <div className="accordionSection">
            {offenses.map((offense, index) => (
              <Accordion
                key={index}
                title={offense.title}
                content={offense.content}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us Today</h2>
        <p>
          Let us help you with your legal issues. Call us at (+91) 84355-86444
          or fill out our <a href="/contact-us">contact form</a> to schedule a
          consultation.
        </p>
      </section>
    </Layout>
  );
};

export default HomePage;
