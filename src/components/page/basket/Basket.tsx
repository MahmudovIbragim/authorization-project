/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import scss from "./Basket.module.scss";
import { useGetBasketQuery } from "../../../redux/api/basket/basket";
import { useNavigate } from "react-router";
import plus_icon from "../../../assets/plus-large-svgrepo-com.svg";
import minus_icon from "../../../assets/minus-svgrepo-com.svg";

interface TypeBasket {}
const Basket: FC<TypeBasket> = () => {
  const { data } = useGetBasketQuery();
  const [allPrice, setAllPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let totalPrice = 0;
    data?.forEach((el) => {
      totalPrice += +el.product.price;
      return setAllPrice(totalPrice);
    });
  }, [navigate]);



  return (
    <div className={scss.Basket}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.back_btn}>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Назад
            </button>
          </div>
          <div className={scss.basket_render}>
            {data?.map((item) => (
              <div className={scss.card} key={item._id}>
                <img src={item.product.photoUrl} alt="" />
                <h1>{item.product.productName}</h1>
                <p>{item.product.price} KGS </p>
                <div className={scss.quantity}>
                  <img src={minus_icon} alt="" />
                  <p>{item.product.quantity}</p>
                  <img src={plus_icon} alt="" />
                </div>
                <button >отменить</button>
              </div>
            ))}
            <h2>Итог:{allPrice}$</h2>
            <button>Перейти к оплате</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
