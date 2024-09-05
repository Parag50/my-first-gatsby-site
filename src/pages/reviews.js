import * as React from "react";
import Layout from "../components/layout";

const ReviewsPage = () => {
  return (
    <Layout pageTitle="Client Reviews">
      <h2>What Our Clients Say</h2>
      <blockquote>
        "Parag Kushwah and her team were amazing. They fought for me every step of
        the way, and I couldn't have asked for better representation. Highly
        recommend!" - Sarah K.
      </blockquote>
      <blockquote>
        "I was in a tough spot, but Jane's expertise and guidance helped me
        through a difficult case. She was always there for me, and the outcome
        was better than I could have imagined." - Mark P.
      </blockquote>
    </Layout>
  );
};

export default ReviewsPage;
