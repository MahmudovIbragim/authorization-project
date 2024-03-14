import { useFormik } from "formik";
import Button, { ButtonProps } from "../../../ui/customButton/CustomButton";
import scss from "./Style.module.scss";
import Input from "../../../ui/customInput/CustomInput";
import { useCreateProductMutation } from "../../../../redux/api/product/product";

const HomeForm = () => {
  const [createProduct] = useCreateProductMutation();
  const loginButtonProps: ButtonProps = {
    type: "submit",
    variant: "primary",
    color: "blue",
    width: "315px",
  };

  const formik = useFormik({
    initialValues: {
      productName: "",
      price: "",
      quantity: "",
      PhotoUrl: "",
    },
    onSubmit: async (values) => {
      await createProduct({
        productName: values.productName,
        price: values.price,
        quantity: values.quantity,
        PhotoUrl: values.PhotoUrl,
      });
    },
  });
  return (
    <form className={scss.Form} onSubmit={formik.handleSubmit}>
      <Input
        id="productName"
        type="productName"
        label="Product Name"
        placeholder="Product Name"
        value={formik.values.productName}
        onChange={formik.handleChange}
        width="300px"
      />
      <Input
        id="price"
        type="price"
        label="Price"
        placeholder="Price"
        value={formik.values.price}
        onChange={formik.handleChange}
        width="300px"
      />
      <Input
        id="quantity"
        type="quantity"
        label="Quantity"
        placeholder="Quantity"
        value={formik.values.quantity}
        onChange={formik.handleChange}
        width="300px"
      />
      <Input
        id="PhotoUrl"
        type="PhotoUrl"
        label="IMG"
        placeholder="IMG"
        value={formik.values.PhotoUrl}
        onChange={formik.handleChange}
        width="300px"
      />
      <Button {...loginButtonProps}>Добавить</Button>
    </form>
  );
};

export default HomeForm;
