import axios from "axios";

export default async function users() {
  try {
    const res = await axios.get(
      "https://66e40badd2405277ed12d3f2.mockapi.io/users"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const userService = { users };
