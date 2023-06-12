import React from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props: { children: any }) {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    return props.children;
  } else {
    return (() =>navigate("/login"));
  }
}

export default ProtectedRoute;
