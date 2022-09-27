export type User = {
  email: string;
  password: string;
  language: string;
}

export type SuperUser = {
  email: string;
  password: string;
  isAdmin: boolean;
}
