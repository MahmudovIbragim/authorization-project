import { useGetFavoriteProductQuery } from "../../../redux/api/favoriteProduct/FavoriteProduct";
import scss from "./Favorite.module.scss";
const Favorite = () => {
  const { data } = useGetFavoriteProductQuery();
  console.log(data);

  return (
    <div className={scss.Favorite}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.rendering}>
            {data?.map((item) => (
              <div key={item.product_id}>
                <h1>{item.product.price}</h1>
                <img src={item.product.photoUrl} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
