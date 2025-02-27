// import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
// import { AiOutlineMenu } from "react-icons/ai"; // Mobile menu icon

function Header() {
  return (
    <header className={classes.header}>
      {/* Left Section: Logo & Delivery */}
      <div className={classes.header__left}>
        <a href="#" className={classes.logo}>
          <img src="/amazon_logo_white.png" alt="Amazon Logo" />
        </a>
        <div className={classes.delivery}>
          <SlLocationPin size={20} />
          <div>
            <p className={classes.smallText}>Deliver to</p>
            <span className={classes.boldText}>San Francisco, CA</span>
          </div>
        </div>
      </div>

      {/* Middle Section: Search Bar */}
      <div className={classes.searchBar}>
        <select className={classes.categorySelect}>
          <option value="all">All</option>
        </select>
        <input type="text" placeholder="Search Amazon" />
        <button className={classes.searchButton}>
          <BsSearch size={22} />
        </button>
      </div>

      {/* Right Section: Language, Account, Orders, and Cart */}
      <div className={classes.header__right}>
        <div className={classes.language}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/2560px-Flag_of_the_United_States_%28Pantone%29.svg.png"
            alt="US Flag"
          />
          <select>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>

        <div className={classes.account}>
          <p className={classes.smallText}>Hello, Sign in</p>
          <span className={classes.boldText}>Account & Lists</span>
        </div>

        <div className={classes.orders}>
          <p className={classes.smallText}>Returns</p>
          <span className={classes.boldText}>& Orders</span>
        </div>

        <div className={classes.cart}>
          <BiCart size={32} />
          <span className={classes.cartCount}>0</span>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      {/* <div className={classes.mobileMenu}>
        <AiOutlineMenu size={30} />
      </div> */}
    </header>
  );
}

export default Header;
