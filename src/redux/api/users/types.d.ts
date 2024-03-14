type Users= {
  id: number;
  email: string;
}

type CreateUsersRequest= {
  userName: string;
  email: string;
  password: string;
}

type CreateUserResponse= {
  id: number;
  userName: string;
  email: string;
  password: number;
}
