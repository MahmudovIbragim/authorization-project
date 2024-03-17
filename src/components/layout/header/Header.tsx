import scss from "./Header.module.scss";
import brName from "../../../assets/logo.svg";
import heart from "../../../assets/Vector (6).svg";
import member from "../../../assets/member.svg";
import basket from "../../../assets/Group.svg";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState<null | string>(null);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  useEffect(() => {
    const auth = localStorage.getItem("isAuth");
    setIsAuth(auth);
  }, []);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.Content}>
          <nav>
            <div className={scss.left}>
              <img src={brName} alt="" />
            </div>
            <div className={scss.right}>
              <ul>
                <li>
                  {isAuth !== null ? (
                    <>
                      <img src={member} onClick={logout} alt="" />
                      Выйти
                    </>
                  ) : (
                    <>
                      <img
                        src={member}
                        onClick={() => {
                          navigate("/register");
                        }}
                        alt=""
                      />
                      Войти
                    </>
                  )}
                </li>
                <li>
                  <img src={heart} alt="" />
                  Избранные
                </li>
                <li>
                  <img src={basket} alt="" />
                  Корзина
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
