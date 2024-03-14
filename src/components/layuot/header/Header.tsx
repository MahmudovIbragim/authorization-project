import scss from "./Header.module.scss";
import brName from "../../../assets/branName.svg";
import log_icon from "../../../assets/logout.svg";
import heart from "../../../assets/heart.svg";
import member from "../../../assets/member.svg";
import { useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

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
                  <button onClick={logout}>
                    <img src={log_icon} alt="" />
                    Выйти
                  </button>
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
