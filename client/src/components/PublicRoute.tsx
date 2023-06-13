import { useNavigate } from "react-router-dom";

function PublicRoute(props: { children: any; }) {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    return (() =>navigate("/"));
  } else {
    return props.children;
  }
}

export default PublicRoute