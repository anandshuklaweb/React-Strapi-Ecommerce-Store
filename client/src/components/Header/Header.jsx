import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import "./Header.scss";
import { Context } from "../../utils/context";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/categories">
              <li>Categories</li>
            </Link>
          </ul>
          <div className="center">
            <Link to="/">ODEOSTORE. </Link>
          </div>
          <div className="right">
            <span className="cart-icon">
              <TbSearch onClick={() => setShowSearch(true)} />
            </span>
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {(!!cartCount && <span>{cartCount}</span>) || <span>0</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
