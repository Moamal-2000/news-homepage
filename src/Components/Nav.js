import Links from "./Links";
import "./Nav.css"

const Nav = ({ hide }) => {
  return (
    <nav className={hide && "hide"}>
      <Links />
    </nav>
  );
};

export default Nav;
