import { Outlet, Link } from "react-router-dom";
import { ReactComponent as NxtGameLogo } from "../../assets/nxt_game_logo2.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <div>
      <div className="navigation-container">
        <Link className="logo-container" to="/">
          <NxtGameLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
