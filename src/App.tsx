import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home } from "./views/home/Home";
import "./app.scss";
import { Modal } from "./components/modal";
import { Header } from "./components/header";
import Launch from "./views/lauch/Launch";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Header />
      <Content className="content">
        <Routes>
          <Route path="/launch/:launchId" element={<Launch />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Content>
      <Modal />
      <ToastContainer autoClose={2000} />
    </Layout>
  </BrowserRouter>
);

export default App;