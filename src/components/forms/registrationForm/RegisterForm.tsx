/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonProps } from "../../ui/customButton/CustomButton";
// import Input from "../../ui/customInput/CustomInput";
import { Field, Form, Formik } from "formik";
import { registerValidate } from "../../../utils/validations/registrationValidate";
import scss from "./Register.module.scss";
import { useCreateUsersMutation } from "../../../redux/api/usersApi/UserApi";

const RegisterForm = () => {
  const [createUser] = useCreateUsersMutation();
  const navigate = useNavigate();

  const handleAddUserSubmit = async (values: any) => {
    const { userName, email, password } = values;

    const result = await createUser({ userName, email, password });
    if (result) {
      navigate("/login");
    }
  };

  const loginButtonProps: ButtonProps = {
    type: "submit",
    variant: "primary",
    color: "blue",
    width: "300px",
  };
  return (
    <div className={scss.Register}>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
        }}
        onSubmit={handleAddUserSubmit}
        validationSchema={registerValidate}
      >
        {({ errors, touched }) => (
          <div className={scss.Content}>
            <Form>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" placeholder="Email" />
              {touched.email && errors.email ? (
                <>
                  <h2 style={{ color: "red", margin: "0px" }}>
                    {errors.email}
                  </h2>
                </>
              ) : null}
              <label htmlFor="userName">UserName</label>
              <Field
                id="userName"
                name="userName"
                type="userName"
                placeholder="Имя Пользвотеля"
              />
              {touched.userName && errors.userName ? (
                <>
                  <h2 style={{ color: "red", margin: "0px" }}>
                    {errors.userName}
                  </h2>
                </>
              ) : null}
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Пароль"
              />
              {touched.password && errors.password ? (
                <>
                  <h2 style={{ color: "red", margin: "0px" }}>
                    {errors.password}
                  </h2>
                </>
              ) : null}
              <Link to={"/login"}>У меня есть аккаунт, войти</Link>
              <Button {...loginButtonProps}>Зарегестрироватся</Button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
