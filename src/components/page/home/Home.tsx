import { FC, useEffect } from "react";
import { useNavigate } from "react-router";
import { useGetProductQuery } from "../../../redux/api/product";

interface TypeHome {}

const Home: FC<TypeHome> = () => {
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
  return (
    <div>
      Home
      <button onClick={logout}>Выйти</button>
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
    </div>
  );
};

export default Home;
