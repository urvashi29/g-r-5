import React, { use, useEffect, useState } from "react";

// Multiple API calls (independant)
const Dashboard = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const [users, posts, products] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/").then((res) =>
          res.json(),
        ),
        fetch("https://jsonplaceholder.typicode.com/users/").then((res) =>
          res.json(),
        ),
        fetch("https://dummyjson.com/products").then((res) => res.json()),
      ]);

      console.log(users, posts, products);
      setData({ users, posts, products });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <>Dashboard Loaded!</>;
};

export default Dashboard;
