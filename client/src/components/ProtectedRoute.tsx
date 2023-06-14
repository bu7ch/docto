import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reloadUserData, setUser } from "../redux/userSlice";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function ProtectedRoute(props: { children: any }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, reloadUser } = useSelector((state: any) => state.user);
  const getUser = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/users/get-user-info-by-id",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        dispatch(setUser(response.data.data));
      }
    } catch (error) {
      dispatch(hideLoading());
      localStorage.clear();
      navigate("/login");
    }
  };
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  if (localStorage.getItem("token")) {
    return props.children;
  } else {
    return () => navigate("/login");
  }
}

export default ProtectedRoute;
