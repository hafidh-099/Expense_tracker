import axios from "axios";
import { BASE_URL } from "../../utils/Urls";
import getUserFromStorage from "../../utils/GetToken";

// add category
export const addCategoryAPI = async ({ name, type }) => {
  const response = await axios.post(
    `${BASE_URL}categories/create`,
    {
      name,
      type,
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
export const listCategoryAPI = async () => {
  const response = await axios.get(`${BASE_URL}categories/list`, {
    headers: {
      Authorization: `Bearer ${getUserFromStorage()}`,
    },
  });
  //return promise
  return response.data;
};

//update
export const updateCategoryAPI = async ({ name, type, id }) => {
  const response = await axios.put(
    `${BASE_URL}categories/update/${id}`,
    {
      name,
      type,
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
export const deleteCategoryAPI = async (id) => {
  const response = await axios.delete(`${BASE_URL}categories/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${getUserFromStorage()}`,
    },
  });
  //return promise
  return response.data;
};
