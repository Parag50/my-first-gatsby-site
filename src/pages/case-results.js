import * as React from "react";
import Layout from "../components/layout";

const CaseResultsPage = () => {
  return (
    <Layout pageTitle="Case Results">
      <h2>Notable Case Results</h2>
      <ul>
        <li>
          <strong>Case 1:</strong> Won a $2 million settlement in a personal
          injury case.
        </li>
        <li>
          <strong>Case 2:</strong> Successfully defended a client in a
          high-profile criminal defense case.
        </li>
        <li>
          <strong>Case 3:</strong> Secured custody rights for a father in a
          complex family law dispute.
        </li>
      </ul>
    </Layout>
  );
};

export default CaseResultsPage;

export const Head = () => <title>Case Results</title>;
