import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
function App() {
  const { loading } = useSelector((state:RootState) => state.alerts);
  return (
    <BrowserRouter>
      {loading && <Spin tip="Loading" />}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
