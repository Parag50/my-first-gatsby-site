import React from "react";
import Layout from "../components/layout";
import Accordion from "../components/Accordion";
import "./homePage.scss";

const HomePage = () => {
  const offenses = [
    {
      title: "Drug Offenses",
      content:
        "Navigating the complexities of drug-related charges can be overwhelming. We are dedicated to defending you with a strategic approach that includes thorough investigation and personalized legal tactics, ensuring your rights are protected every step of the way.",
    },
    {
      title: "Theft and Burglary",
      content:
        "Facing theft or burglary charges can be daunting. Our team focuses on uncovering the truth and challenging the prosecution's claims to build a solid defense tailored to your unique situation.",
    },
    {
      title: "Violent Crimes",
      content:
        "Accusations of violent crimes are serious and require a robust defense. We strive to present a compelling case that highlights mitigating factors and disputes any damaging evidence, aiming to achieve the best possible outcome for you.",
    },
    {
      title: "White-Collar Crimes",
      content:
        "White-collar crimes such as fraud and embezzlement can have severe consequences. Our expert team provides a detailed analysis and strong defense strategy to safeguard your reputation and minimize legal repercussions.",
    },
    {
      title: "Sex Crimes",
      content:
        "Allegations of sex crimes require a sensitive yet aggressive defense approach. We ensure confidentiality and work diligently to protect your rights, offering compassionate support throughout the legal process.",
    },
  ];

  return (
    <Layout>
      <section className="hero">
        <video autoPlay muted playsInline>
          <source
            src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/hero-desktop.mp4?tr=q-95"
            type="video/mp4"
          />
        </video>
        <div className="heroContent">
          <h2>Your Strongest Ally in Legal Battles</h2>
          <p>
            When facing legal challenges, experience and dedication are key. Our
            firm combines deep expertise across various legal fields with a
            commitment to personalized service. From family law to criminal
            defense, we stand by your side, fighting tirelessly to achieve the
            best results for you.
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
        <div className="contactContent">
          <h2>Contact Us Today</h2>
          <p className="contactDetails">
            Let us assist you with your legal concerns. Call us at (+91)
            84355-86444 or fill out our <a href="/contact-us">contact form</a>{" "}
            to schedule a consultation.
          </p>
          <div className="contactHover">
            <p>
              Our team is here to support you every step of the way. Reach out
              to us for a personalized consultation and dedicated service.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
