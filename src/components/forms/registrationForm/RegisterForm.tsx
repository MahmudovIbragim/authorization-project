import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonProps } from "../../ui/customButton/CustomButton";
import Input from "../../ui/customInput/CustomInput";
import { useState } from "react";
import { useCreateUsersMutation } from "../../../redux/api/UsersApi";

const RegisterForm = () => {
  const [createUser] = useCreateUsersMutation()
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };
  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleChangeUserName = (value: string) => {
    setUserName(value);
  };

  const handleAddUserSubmit = async(event:React.FormEvent <HTMLFormElement>) => {
    event.preventDefault()
    const result = await createUser({email, userName, password})
    if(result){
      setEmail('')
      setPassword("")
      setUserName('')
      navigate('/login')
    }

  }

  const loginButtonProps: ButtonProps = {
    type: "submit",
    variant: "primary",
    color: "blue",
    width: "300px",
  };
  return (
    <>
      <form onSubmit={handleAddUserSubmit}>
        <h2>Регистрация</h2>
        <Input
          type="email"
          label="Email"
          placeholder="@email"
          value={email}
          onChange={handleChangeEmail}
          width="300px"
        />
        <Input
          type="text"
          label="Имя Пользвателя"
          placeholder="Имя Пользвотеля"
          value={userName}
          onChange={handleChangeUserName}
          width="300px"
        />
        <Input
          type="password"
          label="Пароль"
          placeholder=" Введите пароль"
          value={password}
          onChange={handleChangePassword}
          width="300px"
        />
        <Link to={"/login"}>У меня есть аккаунт, войти</Link>
        <div>
          <Button {...loginButtonProps} >Зарегестрироватся</Button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
