import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Container.css";
const Container = () => {
  const createDiv = () => {
    const list = [];
    for (let i = 0; i < 8; i++) {
      const element = <div className="box"></div>;
      list.push(element);
    }
    return list;
  };
  return (
    <div className="container">
      <h2 className="title">شرکت ها</h2>
      <div className="boxSeachContainer">
        <input
          className="inputSearchContainer"
          placeholder="عبارت مورد نظر..."
        />
        <button className="button">جستجو</button>
        <span className="iconButtonSearch">
          <BiSearchAlt2 />
        </span>
      </div>
      <div className="mainContainer">{createDiv()}</div>
      <div className="paginate">
        <ul className="paginateItems">
          <li>
            <IoIosArrowForward />
          </li>
          <li>بعدی</li>
          <li>4</li>
          <li>...</li>
          <li>2</li>
          <li>1</li>
          <li>قبلی</li>
          <li>
            <IoIosArrowBack />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Container;
