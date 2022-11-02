import axios from "axios";

const uri = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

export const useApi = () => ({
  signin: async (username: string, password: string) => {
    const { data } = await uri.post("/auth/signin", { username, password });
    return data;
  },
  
  signout: async (_id: string) => {
    const { data } = await uri.post('', {  _id });
    return data;
  },
});
