import * as Yup from "yup";
export const registerValidate = Yup.object({
  email: Yup.string().email("Не корректный email").required("Заполните поле"),
  password: Yup.string()
    .min(4, "Пороль должен сдержать мин 4 символ")
    .required("Напишите Пароль"),
  userName: Yup.string()
    .min(4, "Имя должен сдержать мин 4 символ")
    .required("Напишите Имя"),
});
