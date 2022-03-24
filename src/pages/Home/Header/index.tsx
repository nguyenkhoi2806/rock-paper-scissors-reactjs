import "./header.scss";

import Logo from "../../../assets/images/logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="header-img">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header-score">
        <p>SCORE</p>
        <span>3</span>
      </div>
    </div>
  );
}

export default Header;
