import * as React from "react";
import Layout from "../components/layout";

const ContactUsPage = () => {
  return (
    <Layout pageTitle="Contact Us">
      <p>
        If you need legal assistance, don’t hesitate to reach out. You can
        contact us by phone at (555) 123-4567 or use the form below.
      </p>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" required />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" required />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" required></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  );
};

export default ContactUsPage;
