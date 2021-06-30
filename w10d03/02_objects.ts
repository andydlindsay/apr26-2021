interface IPotentialUser {
  id?: number;
  username: string;
  password: string;
  avatarUrl?: string;
}

const potentialUser: IPotentialUser = {
  username: 'jstamos',
  password: '1234',
  avatarUrl: 'http://blablabla'
};

const users: IPotentialUser[] = [];
users.push(potentialUser);
