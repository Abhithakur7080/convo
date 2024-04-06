import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Layout from "../components/Layout";
import ProtectedRoute from "../routes.jsx/Proctected.route";

const Home = () => {
  return (
    <ProtectedRoute>
      <Layout title="Convo - Home">
        <div className="container">
          <Sidebar />
          <Chat />
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Home;
