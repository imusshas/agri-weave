import { Link, useNavigate } from "react-router-dom";
import { Search } from "../../UI/Search";
import { CART, HOME, LOGIN, ORDERS, WISHLIST } from "../../../routes/routes";
import { Button } from "../../UI/Button";
import { IoBag, IoCartOutline, IoHeartOutline } from "react-icons/io5";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <Link to={HOME}>
        <img src="/logo.png" alt="AgriWeave Logo" className="logo" />
      </Link>
      <Search onSearch={() => {}} />
      <nav>
        <ul className="flex" >
          <li>
            <Link to={CART}>
              <IoCartOutline className="nav-icon" /> Cart
            </Link>
          </li>
          <li>
            <Link to={WISHLIST}>
              <IoHeartOutline className="nav-icon" /> Wishlist
            </Link>
          </li>
          <li>
            <Link to={ORDERS}>
              <IoBag className="nav-icon" /> Orders
            </Link>
          </li>
        </ul>
      </nav>
      <Button title="Login" onButtonClick={() => navigate(LOGIN)} className="btn btn-secondary" />
    </header>
  );
};
