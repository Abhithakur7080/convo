import React from "react";
import Layout from "../components/Layout";
import ProtectedRoute from "../routes.jsx/Proctected.route";

const Contactus = () => {
  return (
    <ProtectedRoute>
      <Layout title={"Convo - Contact"}>
        <div>Contact</div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Contactus;
