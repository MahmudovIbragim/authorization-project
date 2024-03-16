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
      photoUrl: "",
    },
    onSubmit: async (values) => {
      const newData = {
        productName: values.productName,
        price: values.price,
        quantity: values.quantity,
        photoUrl: values.photoUrl,
      };
      await createProduct(newData);
    },
  });
  return (
    <form className={scss.Form} onSubmit={formik.handleSubmit}>
      <Input
        id="productName"
        type="text"
        label="Product Name"
        placeholder="Product Name"
        value={formik.values.productName}
        onChange={formik.handleChange}
        width="300px"
      />
      <Input
        id="price"
        type="text"
        label="Price"
        placeholder="Price"
        value={formik.values.price}
        onChange={formik.handleChange}
        width="300px"
      />
      <Input
        id="quantity"
        type="text"
        label="Quantity"
        placeholder="Quantity"
        value={formik.values.quantity}
        onChange={formik.handleChange}
        width="300px"
      />
      <Input
        id="photoUrl"
        type="text"
        label="IMG"
        placeholder="IMG"
        value={formik.values.photoUrl}
        onChange={formik.handleChange}
        width="300px"
      />
      <Button {...loginButtonProps}>Добавить</Button>
    </form>
  );
};

export default HomeForm;
