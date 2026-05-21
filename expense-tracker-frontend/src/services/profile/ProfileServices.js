import axios from "axios";
import { BASE_URL } from "../../utils/Urls";
import getUserFromStorage from "../../utils/GetToken";

// add category
export const getProfileAPI = async () => {
  const response = await axios.get(`${BASE_URL}user/profile`, {
    headers: {
      Authorization: `Bearer ${getUserFromStorage()}`,
    },
  });
  //return promise
  return response.data;
};

//update
export const updateProfileAPI = async ({ email, username }) => {
  const response = await axios.put(
    `${BASE_URL}user/update-profile`,
    {
      email,
      username,
    },
    {
      headers: {
        Authorization: `Bearer ${getUserFromStorage()}`,
      },
    },
  );
  //return promise
  return response.data;
};

//update
export const updatePassProfileAPI = async ({ password }) => {
  const response = await axios.put(
    `${BASE_URL}user/update-password`,
    {
      password
    },
    {
      headers: {
        Authorization: `Bearer ${getUserFromStorage()}`,
      },
    },
  );
  //return promise
  return response.data;
};