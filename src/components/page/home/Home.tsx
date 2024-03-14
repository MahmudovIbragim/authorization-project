import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useGetProductQuery } from "../../../redux/api/product";
import Modal from "../../forms/modal/Modal";

interface TypeHome {}

const Home: FC<TypeHome> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { data: products = [] } = useGetProductQuery();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    navigate("login");
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      Home
      <button onClick={logout}>Выйти</button>
      <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
      <div>
        {products.map((item) => (
          <div key={item.id}>
            <h1>{item.productName}</h1>
            <h3>{item.quantity}</h3>
            <img src={item.PhotoUrl} alt="" />
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={handleModal}>
        bye bye my Girl
      </Modal>
    </div>
  );
};

export default Home;
