export type User = {
  _id: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  assignment: string;
  password: string;
  avatar: string | ArrayBuffer | null;
};
