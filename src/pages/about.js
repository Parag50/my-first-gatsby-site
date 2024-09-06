import React from "react";
import Layout from "../components/layout";
import { Button } from "@cred/neopop-web/lib/components";
import { Header } from "@cred/neopop-web/lib/components";

const customButtonStyles = {
  margin: "20px 0",
  padding: "12px 24px",
  fontSize: "16px",
};

const AboutPage = () => {
  return (
    <Layout>
      <Header
        heading="About Our Law Firm"
        description="Pay using credit card and get exclusive rewards"
        onBackClick={() => {
          console.log("Back clicked");
        }}
      />

      <section style={{ marginTop: "30px" }}>
        <article
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <h2>Our Founder's Story</h2>

          <p>
            Our law firm was founded with the mission of providing clients with
            professional, personalized legal representation. Led by Parag
            Kushwah, an experienced and dedicated attorney, we believe in
            fighting for our clients' rights and ensuring they get the best
            possible outcomes.
          </p>
          <p>
            Parag Kushwah has been practicing law for over 15 years,
            specializing in family law, criminal defense, and civil litigation.
            She is recognized as one of the top attorneys in the country and has
            helped countless clients achieve justice in and out of the
            courtroom.
          </p>

          {/* Call-to-Action Button */}
          <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="dark"
            style={customButtonStyles}
            onClick={() => {
              console.log("Primary button clicked");
            }}
          >
            Get in Touch
          </Button>
        </article>
      </section>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About Our Law Firm</title>;
