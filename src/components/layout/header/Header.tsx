import scss from "./Header.module.scss";
import brName from "../../../assets/logo.svg";
import log_icon from "../../../assets/logout.svg";
import heart from "../../../assets/Button - Избранное (1).svg";
import member from "../../../assets/Button - Войти.svg";
import basket from "../../../assets/Button - Избранное.svg";
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
                  <img src={member} alt="" />
                </li>
                <li>
                  <img src={heart} alt="" />
                </li>
                <li>
                  <img src={basket} alt="" />
                </li>
                <li>
                  {isAuth !== null ? (
                    <>
                      <button onClick={logout}>
                        <img src={log_icon} alt="" />
                        Выйти
                      </button>
                    </>
                  ) : null}
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
