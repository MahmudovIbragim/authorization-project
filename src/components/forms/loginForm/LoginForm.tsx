import Input from "../../ui/customInput/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonProps } from "../../ui/customButton/CustomButton";
import { useLoginMutation } from "../../../redux/api/loginApi";
import { useFormik } from "formik";
import * as Yup from "yup";
const LoginForm = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const loginButtonProps: ButtonProps = {
    type: "submit",
    variant: "primary",
    color: "blue",
    width: "300px",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Не корректный email")
        .required("Заполните поле"),
      password: Yup.string().required("Напишите Пароль"),
    }),
    onSubmit: async (values) => {
      const result = await login({
        email: values.email,
        password: values.password,
      });
      if ("data" in result) {
        const { token } = result.data;
        localStorage.setItem("token", token);
        localStorage.setItem("isAuth", "true");
        navigate("/");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Вход</h2>
      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="@email"
        value={formik.values.email}
        onChange={formik.handleChange}
        width="300px"
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <>
          <h2 style={{ color: "red", margin: "0px" }}>{formik.errors.email}</h2>
        </>
      ) : null}
      <Input
        id="password"
        type="password"
        label="Введите Пароль"
        placeholder="Пароль"
        value={formik.values.password}
        onChange={formik.handleChange}
        width="300px"
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (
        <>
          <h2 style={{ color: "red", margin: "0px" }}>
            {formik.errors.password}
          </h2>
        </>
      ) : null}
      <Link to={"/register"}>Нет акканта, Зарегестрироватся</Link>
      <div>
        <Button {...loginButtonProps}>Войти</Button>
      </div>
    </form>
  );
};
export default LoginForm;
