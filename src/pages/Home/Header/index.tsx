import "./header.scss";

import Logo from "../../../assets/images/logo.svg";

interface HeaderInterface {
  score: number;
}

function Header(props: HeaderInterface) {
  const { score } = props;

  return (
    <div className="header">
      <div className="header-img">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header-score">
        <p>SCORE</p>
        <span>{score}</span>
      </div>
    </div>
  );
}

export default Header;
