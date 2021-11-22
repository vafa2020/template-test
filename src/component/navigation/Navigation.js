import { logo } from "../../file";
import { GrUserManager } from "react-icons/gr";
import "./Navigation.css";

const Navigation = () => {
  const createLi = () => {
    const list = [];
    for (let i = 0; i < 14; i++) {
      const element = (
        <li className="navigationItem">
          <span>
            <GrUserManager />
          </span>
          <span>کاربران</span>
        </li>
      );
      list.push(element);
    }
    return list;
  };
  return (
    <div className="navigation">
      <section className="headerNav">
        <div>
          <img className="imageLogo" src={logo} alt="logo" />
        </div>
        <div className="headerText">
          <span>پنل مدیریت</span>
          <span>متنا</span>
        </div>
      </section>
      <section className="mainNavigation">
        <nav className="navNavigation">
          <ul>{createLi()}</ul>
        </nav>
      </section>
    </div>
  );
};

export default Navigation;
