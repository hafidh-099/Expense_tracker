import axios from "axios";
import { BASE_URL } from "../../utils/Urls";

export const loginAPI = async ({ email, password }) => {
  const response = await axios.post(`${BASE_URL}user/login`, {
    email,
    password,
  });
  //return promise
  return response.data;
};

//register
export const registerAPI = async ({ username, email, password }) => {
  const response = await axios.post(`${BASE_URL}user/register`, {
    username,
    email,
    password,
  });
  //return promise
  return response.data;
};
