import logo from "../../../images/logo.png";
import line from "../../../images/Line.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Titulo" className="header__image" />
      <img src={line} alt="Linea" className="header__image-line" />
    </header>
  );
}

export default Header;
