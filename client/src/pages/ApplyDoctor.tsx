import React from "react";
import { Layout } from "../components/Layout";
import { Button, Col, Form, Row, TimePicker } from "antd";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import moment from "moment";

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
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
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
        <Form layout="vertical" onFinish={onFinish}>
          <h1 className="card-title">Personal Information</h1>
          <Row gutter={20}>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem
                label="First Name"
                name="firstName"
                rules={[{ required: true }]}
              >
                <Input placeholder="First Name" />
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem
                label="Last Name"
                name="lastName"
                rules={[{ required: true }]}
              >
                <Input placeholder="Last Name" />
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem
                label="Phone Number"
                name="phoneNumber"
                rules={[{ required: true }]}
              >
                <Input placeholder="Phone Name" />
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem
                label="Website"
                name="website"
                rules={[{ required: true }]}
              >
                <Input placeholder="Website" />
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem
                label="Address"
                name="address"
                rules={[{ required: true }]}
              >
                <Input placeholder="Address" />
              </FormItem>
            </Col>
          </Row>
          <hr />
          <h1 className="card-title">Professional Information</h1>
          <Row gutter={20}>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem
                label="Specialization"
                name="specialization"
                rules={[{ required: true }]}
              >
                <Input placeholder="Specialization" />
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem
                label="Experience"
                name="experience"
                rules={[{ required: true }]}
              >
                <Input placeholder="Experience" type="number" />
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem
                label="Fee Per Cunsultation"
                name="feePerCunsultation"
                rules={[{ required: true }]}
              >
                <Input placeholder="Fee Per Cunsultation" type="number" />
              </FormItem>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <FormItem
                label="Timings"
                name="timings"
                rules={[{ required: true }]}
              >
                <TimePicker.RangePicker />
              </FormItem>
            </Col>
          </Row>
          <div className="d-flex">
            <Button type="primary" htmlType="submit">
              SUBMIT
            </Button>
          </div>
        </Form>
      </Layout>
    </div>
  );
}

export default ApplyDoctor;
