import { FC } from "react";
import LoginForm from "./loginForm/LoginForm";

interface TypeLogin {}
const Login: FC<TypeLogin> = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
