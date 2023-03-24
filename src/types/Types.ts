export type NoteObject = {
  id: string;
  title: string;
  note: string;
};

export type UserPassType = {
  username: string;
  password: string;
};

export type TokenType = {
  Authorization: string,
} | null;