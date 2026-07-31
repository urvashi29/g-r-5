import React, { useEffect } from "react";

// Multiple API calls (dependant)
const Contact = () => {
  const fetchData = async () => {
    try {
      const user = await fetch(
        "https://jsonplaceholder.typicode.com/users/",
      ).then((res) => res.json());
      const posts = await fetch(
        "https://jsonplaceholder.typicode.com/posts/",
      ).then((res) => res.json());

      console.log(user, posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Dependant API's</h2>
    </>
  );
};

export default Contact;
