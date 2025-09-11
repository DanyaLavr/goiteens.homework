import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  &.active {
    color: red;
  }
`;
const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0;
`;
export default function Header() {
  return (
    <nav>
      <NavMenu>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </NavMenu>
    </nav>
  );
}
