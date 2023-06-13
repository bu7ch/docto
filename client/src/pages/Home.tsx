import axios from "axios";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
function Home() {
  const getData = async () => {
    try {
       await axios.post("/api/users/get-user-info-by-id",
      {token:localStorage.getItem("token")},
       {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    } catch (error) {
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <h1>HomePage</h1>
    </Layout>
  );
}

export default Home;
