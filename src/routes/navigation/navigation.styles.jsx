import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as NxtGameLogo } from "../../assets/nxt_game_logo2.svg";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  width: 100%;
  height: 100%;
`;
export const Logo = styled(NxtGameLogo)`
  width: 110px;
  height: 100%;
`;
export const NavLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
