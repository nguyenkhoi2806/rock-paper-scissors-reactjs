import "./home.scss";

import Header from "./Header";
import Game from "./Game";
import Result from "./Result";

function Home() {
  return (
    <div className="container">
      <Header />
      <Game />
      <Result />
    </div>
  );
}

export default Home;
