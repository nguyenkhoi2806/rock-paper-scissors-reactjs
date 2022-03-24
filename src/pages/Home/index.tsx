import "./home.scss";

import Header from "./Header";
import Game from "./Game";
// import Result from "./Result";

function Home() {
  return (
    <div className="container">
      <Header />
      <Game />
    </div>
  );
}

export default Home;
