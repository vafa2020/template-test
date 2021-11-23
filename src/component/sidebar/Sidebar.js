import { logo } from "../../file";
import { GrUserManager } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import "./Sidebar.css";

const Sidebar = () => {
  const createLi = () => {
    const list = [];
    for (let i = 0; i < 13; i++) {
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
      <div style={{ width: "100%" }}>
        <section className="headerNav">
          <div>
            <img className="imageLogo" src={logo} alt="logo" />
          </div>
          <div className="headerText">
            <span>پنل مدیریت</span>
            <span>متنا</span>
          </div>
        </section>
      </div>
      <section className="mainNavigation">
        <nav className="navNavigation">
          <ul>
            {createLi()}
            <li className="navigationItem">
              <span>
                <GrUserManager />
              </span>
              <span>تنظیمات</span>
              <span style={{ position: "absolute", left: "10px" }}>
                <IoIosArrowBack />
              </span>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Sidebar;
