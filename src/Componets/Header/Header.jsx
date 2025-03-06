/* eslint-disable no-unused-vars */
import style from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../Componets/DataProvider/DataProvidere";

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket },dispatch] = useContext(DataContext);
  const totalProduct = basket.reduce((sum, item) => sum + item.amount, 0);

  return (
    <section className={style.fixed}>
      <div className={style.header_container}>
        <div className={style.logo_container}>
          <Link to="/">
            <img src="/amazon_logo_white.png" alt="Amazon Logo" />
          </Link>
          <div className={style.delivery}>
            <span>
              <SlLocationPin size={15} />
            </span>
            <div>
              <p>Deliver to</p>
              <span>San Francisco</span>
            </div>
          </div>
        </div>

        <div className={style.search}>
          <select>
            <option value="">ALL</option>
            <option value="computer">Computer</option>
            <option value="book">Book</option>
            <option value="electronics">Electronics</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <BsSearch size={25} />
        </div>

        <div className={style.order_container}>
          <div className={style.language}>
            <div className={style.lang2}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="US Flag"
              />
              <select>
                <option value="en">EN</option>
                <option value="am">አማ</option>
              </select>
            </div>
          </div>
          <Link to="/auth">
            <div>
              <p>Hello, sign in</p>
              <span>Account and List</span>
            </div>
          </Link>
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={style.cart}>
            {/* <BiCart size={35} /> */}
            <img src="cart2.png" alt="" />
            <span>{totalProduct}</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
}

export default Header;
