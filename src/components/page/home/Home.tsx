import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Modal from "../../ui/modal/Modal";
import scss from "./Home.module.scss";
import HomeForm from "./Form/Form";
import { useGetProductQuery } from "../../../redux/api/product/product";

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

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={scss.HomePage}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.add_btn}>
            <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
          </div>
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
            <div className={scss.modalContent}>
              <div className={scss.modal_navBar}>
                <p>Добавить новую позицию</p>
              </div>
              <div className={scss.froms}>
                <HomeForm />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Home;
