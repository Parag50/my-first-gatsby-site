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

// export const Head = () => <title>About Our Law Firm</title>;








// import React, { useState } from "react";

// const Calculator = () => {
//   // Using camelCase for variable names
//   const [inputA, setInputA] = useState(0);
//   const [inputB, setInputB] = useState(0);
//   const [result, setResult] = useState(null);

//   // Generic handler for input changes
//   const handleInputChange = (e, setInput) => {
//     setInput(parseFloat(e.target.value) || 0); // Ensure valid number or fallback to 0
//   };

//   // Calculation handlers
//   const handleAddition = () => {
//     setResult(inputA + inputB);
//   };

//   const handleSub = () => {
//     setResult(inputA - inputB);
//   };

//   const handleReset = () => {
//     setResult(0);
//   };

//   return (
//     <div style={{ maxWidth: "300px", margin: "0 auto", textAlign: "center" }}>
//       <h2>Simple </h2>

//       {/* Input fields */}
//       <input
//         type="number"
//         value={inputA}
//         onChange={(e) => handleInputChange(e, setInputA)}
//         placeholder="Enter A"
//         style={{ margin: "10px", padding: "5px", width: "100%" }}
//       />
//       <input
//         type="number"
//         value={inputB}
//         onChange={(e) => handleInputChange(e, setInputB)}
//         placeholder="Enter B"
//         style={{ margin: "10px", padding: "5px", width: "100%" }}
//       />

//       {/* Action button */}
//       <button
//         onClick={handleAddition}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#4CAF50",
//           color: "#fff",
//           border: "none",
//           cursor: "pointer",
//           marginTop: "10px"
//         }}
//       >
//         Add
//       </button>

//       <button
//         onClick={handleSub}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#4CAF50",
//           color: "#fff",
//           border: "none",
//           cursor: "pointer",
//           marginTop: "10px"
//         }}
//       >
//         Sub
//       </button>


//       <button
//         onClick={handleReset}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#4CAF50",
//           color: "#fff",
//           border: "none",
//           cursor: "pointer",
//           marginTop: "10px"
//         }}
//       >
//         Reset
//       </button>

//       {/* Result display */}
//       <h3>Result: {result !== null ? result : "No result"}</h3>
//     </div>
//   );
// };

// export default Calculator;


// Readed the doc of Gatsby Plugin and looked for the configrations avalable in getsby-node for production build. 