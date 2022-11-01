import axios from "axios";

const uri = axios.create({
  baseURL: "https://app-cpmy.herokuapp.com",
});

export const useApi = () => ({
  signin: async (email: string, password: string) => {
    const { data } = await uri.post("/auth/signin", { email, password });
    return data;
  },
});
