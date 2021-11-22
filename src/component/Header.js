import { BiBell, BiSearchAlt2 } from "react-icons/bi";
import { RiWechatLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { support } from "../file";
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="navRight">
          <ul>
            <li>
              <img className="support" src={support} alt="support" />
            </li>
            <li className="item">
              <div className="itemText">
                <span>پیشرو نت انرژی</span>
                <span className="subText">پشتیبانی</span>
              </div>
              <IoIosArrowDown />
            </li>
            <li>
              <RiWechatLine />
            </li>
            <li>
              <BiBell />
            </li>
          </ul>
        </div>
        <div className="navLeft">
          <div className="boxSearch">
            <input className="searchNav" placeholder="جستجو" />
            <span className="iconSearch">
              <BiSearchAlt2 />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
