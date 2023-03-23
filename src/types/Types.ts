export type NoteObject = {
  id: string;
  title: string;
  body: string;
};

export type UserPassType = {
  username: string;
  password: string;
};

export type TokenType = {
  Authorization: string,
} | null;