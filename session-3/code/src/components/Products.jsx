import React, { use, useEffect, useState } from "react";

const Products = () => {
  const [firstName, setFirstName] = useState("Alina");
  let id = null;

  // call once on intial render (Mounting)
  useEffect(() => {
    // API call
    console.log("Initially render!");
  }, []); //dependency array

  //   updation
  useEffect(() => {
    //post request
    console.log(`${firstName} is updated!`);
  }, [firstName]); //state variable updation

  //   It is called on every render
  useEffect(() => {
    console.log("On every render!");
  });

  useEffect(() => {
    id = setInterval(() => {
      console.log("hello");
    });
  }, []);

  //   we can pass the type of dependecy array (Unmounting)
  useEffect(() => {
    return () => {
      console.log("cleared!");
      clearInterval(id);
      // clear interval, deattach event
      // ele.removeEventListener()
    };
  }, [firstName]);

  return (
    <>
      <button onClick={() => setFirstName("Alaya")}>Update</button>
    </>
  );
};

export default Products;
