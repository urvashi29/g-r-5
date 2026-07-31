// API layer
import axiosClient from "./axiosClient";

export const getUsers = () => {
  return axiosClient.get("/users");
};

export const getUserById = (id) => {
  return axiosClient.get(`/users/${id}`);
};

// put
// patch
// delete
