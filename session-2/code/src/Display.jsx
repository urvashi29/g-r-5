import React from "react";

const Display = (props) => {
  console.log(props);
  const { firstName, lastName, city } = props;

  return (
    <>
      <p>
        My name is {firstName} {lastName}, living in {city}
      </p>
    </>
  );
};

export default Display;
