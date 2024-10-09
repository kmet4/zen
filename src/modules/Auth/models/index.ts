export interface IUser {
  id: string;
  nickName: string;
  email: string;
  password: string;
}

export type ICreateUser = Omit<IUser, 'id'>;