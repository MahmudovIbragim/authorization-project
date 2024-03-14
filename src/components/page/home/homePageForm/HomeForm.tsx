import { useFormik } from "formik";
import Button, { ButtonProps } from "../../../ui/customButton/CustomButton";
import Input from "../../../ui/customInput/CustomInput";
import { useCreateProductMutation } from "../../../../redux/api/product/product";

const HomeForm = () => {
  const [createProduct] = useCreateProductMutation();
  const loginButtonProps: ButtonProps = {
    type: "submit",
    variant: "primary",
    color: "blue",
    width: "300px",
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
    <form onSubmit={formik.handleSubmit}>
      <Input
        id="productName"
        type="productName"
        label="productName"
        placeholder="productName"
        value={formik.values.productName}
        onChange={formik.handleChange}
        width="300px"
      />
      <Input
        id="price"
        type="price"
        label="price"
        placeholder="price"
        value={formik.values.price}
        onChange={formik.handleChange}
        width="300px"
      />
      <Input
        id="quantity"
        type="quantity"
        label="quantity"
        placeholder="quantity"
        value={formik.values.quantity}
        onChange={formik.handleChange}
        width="300px"
      />
      <Input
        id="PhotoUrl"
        type="PhotoUrl"
        label="PhotoUrl"
        placeholder="PhotoUrl"
        value={formik.values.PhotoUrl}
        onChange={formik.handleChange}
        width="300px"
      />
      <Button {...loginButtonProps}>Добавить</Button>
    </form>
  );
};

export default HomeForm;
