interface IUser {
  email: string;
  password: string;
}

const login = (user: IUser): boolean => {
  return false;
};

// const user: IUser = {} as IUser;

const user = {
  email: 'jstamos@stamos.com',
  password: '1234',
  likes: ['Full House', 'Fuller House']
};

login(user);
