import { FC } from "react";
import RegisterForm from "../../forms/registrationForm/RegisterForm";

interface TypeRegister {}
const Registration: FC<TypeRegister> = () => {

  return <div>
    <RegisterForm/>
  </div>;
};

export default Registration;
