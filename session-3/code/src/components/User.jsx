import React, { useState } from "react";

const User = () => {
  //   let count = 0;
  //   const [state variable, method] = useState(initial value)
  const [firstName, setFirstName] = useState("Alina");
  const [age, setAge] = useState(20);
  const [isVerfied, setIsVerified] = useState(true);
  const [person, setPerson] = useState({
    id: 1,
    city: "Pune",
    age: 24,
  });

  const [obj, setObject] = useState(null);

  const [nums, setNums] = useState([39, 4, 20, 3, 20, 10]);

  const handleUpdate = () => {
    setFirstName("Alaya");
    setAge(24);
    // setIsVerified(false);
    setPerson({ ...person, city: "Hyderbad" });
    setNums([...nums, 100, 200, 3]);
    // count += 1;
  };

  return (
    <>
      {/* <p>{count}</p> */}
      <p>FirstName: {firstName}</p>
      <p>Age: {age}</p>
      <div>
        {isVerfied && (
          <p>
            Person: {person.city} {person.age}
          </p>
        )}

        {/* {isVerfied ? () : ()} */}
      </div>
      <div>
        {nums.map((n) => (
          <p>{n}</p>
        ))}
      </div>

      <button onClick={handleUpdate}>Update</button>
    </>
  );
};

export default User;
