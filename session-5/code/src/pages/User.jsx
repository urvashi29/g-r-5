import React from "react";
import { useUsers } from "../hooks/useUsers";

const User = () => {
  const { data } = useUsers();

  return (
    <div>
      {data.length ? (
        data.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })
      ) : (
        <p>No Post Yet!</p>
      )}
    </div>
  );
};

export default User;
