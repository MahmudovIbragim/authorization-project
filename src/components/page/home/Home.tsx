import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Modal from "../../ui/modal/Modal";
import scss from "./Home.module.scss";
import HomeForm from "./Form/Form";
import heart from "../../../assets/heart.svg";
import heartbg from "../../../assets/heart_bg.svg";
import { useGetProductQuery } from "../../../redux/api/product/product";
import { useCreateFavoriteProductMutation } from "../../../redux/api/favoriteProduct/FavoriteProduct";
import { usePostBasketMutation } from "../../../redux/api/basket/basket";

interface TypeHome {}

const Home: FC<TypeHome> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductQuery();
  const [createFavorite] = useCreateFavoriteProductMutation();
  const [postBasket] = usePostBasketMutation();
  const [favoriteHeart, setFavoriteHeat] = useState<null | number>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  console.log(isLoading, "isloading");

  const hadnleAddTohhleFavorite = async (id: number) => {
    await createFavorite(id);
    setFavoriteHeat(id);
    setIsFavorite(true);
  };

  const handleAddBasket = async (id: number) => {
    await postBasket(id);
  };

  return (
    <div className={scss.HomePage}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.add_btn}>
            <button onClick={() => setIsOpen(!isOpen)}> Добавить Товар</button>
          </div>
          <div className={scss.rendergin}>
            {data?.map((item) => (
              <div className={scss.card} key={item._id}>
                <img src={item.photoUrl} alt="" />
                <div className={scss.content_card}>
                  <div className={scss.info_card}>
                    <p className={scss.now}>NEW NOW</p>
                    <p className={scss.name}> {item.productName}</p>
                    <p className={scss.price}>KGS {item.price}$</p>
                  </div>
                  <div className={scss.favoriteImg}>
                    {favoriteHeart === item._id && isFavorite ? (
                      <>
                        <img
                          src={heartbg}
                          alt=""
                          onClick={() => {
                            setFavoriteHeat(null);
                            setIsFavorite(false);
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={heart}
                          alt=""
                          onClick={() => hadnleAddTohhleFavorite(item._id)}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className={scss.basketBtn}>
                  <button onClick={() => handleAddBasket(item._id!)}>
                    Добавить в карзину
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Modal
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <div className={scss.modalContent}>
              <div className={scss.modal_navBar}>
                <p>
                  Добавить новую <br />
                  позицию
                </p>
              </div>
              <div className={scss.froms}>
                <HomeForm
                  onClose={() => {
                    setIsOpen(false);
                  }}
                />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Home;
