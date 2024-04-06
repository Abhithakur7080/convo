import React from "react";
import Layout from "../components/Layout";
import ProtectedRoute from "../routes.jsx/Proctected.route";

const Profile = () => {
  return (
    <ProtectedRoute>
      <Layout title={"Convo - Profile"}>
        <div>Profile</div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Profile;
