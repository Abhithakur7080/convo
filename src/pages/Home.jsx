import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Layout from "../components/Layout";
import ProtectedRoute from "../routes.jsx/Proctected.route";
import { ToolContextProvider } from "../redux/toolContext";

const Home = () => {
  return (
    <ProtectedRoute>
      <ToolContextProvider>
        <Layout title="Convo - Home">
          <div className="container">
            <Sidebar />
            <Chat />
          </div>
        </Layout>
      </ToolContextProvider>
    </ProtectedRoute>
  );
};

export default Home;
