import axios from "axios";
import React, { useEffect } from "react";
import { Layout } from "../components/Layout";
function Home() {
  const getData = async () => {
    try {
      const response = await axios.get(
        "/api/users/get-user-info-by-id",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
        <h1>HomePage</h1>
    </Layout>
  )
}

export default Home;
