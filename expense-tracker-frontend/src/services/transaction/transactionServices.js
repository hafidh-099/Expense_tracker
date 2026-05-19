import axios from "axios";
import { BASE_URL } from "../../utils/Urls";
import getUserFromStorage from "../../utils/GetToken";

// add category
export const addTransactionAPI = async ({ type, amount, description,date ,category}) => {
  const response = await axios.post(
    `${BASE_URL}transaction/create`,
    {
      amount,
      type,
      description,
      date,
      category
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

//fetch
export const listTransactionAPI = async () => {
  const response = await axios.get(`${BASE_URL}transaction/list`, {
    headers: {
      Authorization: `Bearer ${getUserFromStorage()}`,
    },
  });
  //return promise
  return response.data;
};

//update
export const updaTransactionAPI = async ({ type, amount, description,id }) => {
  const response = await axios.put(
    `${BASE_URL}transaction/update/${id}`,
    {
      amount,
      type,
      description
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

//delete
export const deleteTransactionAPI = async (id) => {
  const response = await axios.delete(`${BASE_URL}transaction/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${getUserFromStorage()}`,
    },
  });
  //return promise
  return response.data;
};
