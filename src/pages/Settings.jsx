import React from "react";
import Layout from "../components/Layout";
import ProtectedRoute from "../routes.jsx/Proctected.route";

const Settings = () => {
  return (
    <ProtectedRoute>
      <Layout title={"Convo - Settings"}>
        <div>Settings</div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Settings;
