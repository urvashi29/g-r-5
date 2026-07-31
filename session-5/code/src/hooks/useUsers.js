import { use, useEffect, useState } from "react";
import { getUsers } from "../api/userApi";

// custom hook for API call
export const useUsers = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getUsers();
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data };
};
