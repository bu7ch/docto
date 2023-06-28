import React from "react";
import { Layout } from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import  DoctorForm from "../components/DoctorForm";

function ApplyDoctor() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/users/apply-doctor-account",
        {
          ...values,
          userId: user._id,
          timings: [
            moment(values.timings[0]).format("HH:mm"),
            moment(values.timings[1]).format("HH:mm"),
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Layout>
        <h1 className="page-title">Apply Doctor</h1>
        <hr />
        <DoctorForm onFinish={onFinish}/>
      </Layout>
    </div>
  );
}

export default ApplyDoctor;
