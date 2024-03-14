import { FC } from "react";
import LoginForm from "../../forms/loginForm/LoginForm";

interface TypeLogin {}
const Login: FC<TypeLogin> = () => {
  return <div>
    <LoginForm/>
  </div>;
};

export default Login;
