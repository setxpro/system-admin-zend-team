export type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  assignment: string;
  password: string;
  avatar: string | ArrayBuffer | null;
};
