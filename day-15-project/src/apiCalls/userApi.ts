import axios, { AxiosResponse } from "axios";

export type TUser = {
  id: number;
  name: string;
  email: string;
  role: string;
  lastLogin: string;
  status: string;
};

async function getUsers() {
  try {
    const response: AxiosResponse<TUser[]> = await axios.get(
      "https://66e40badd2405277ed12d3f2.mockapi.io/users"
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteUserById(id: number) {
  try {
    const response: AxiosResponse<TUser[]> = await axios.delete(
      `https://66e40badd2405277ed12d3f2.mockapi.io/users/${id}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { getUsers, deleteUserById };
