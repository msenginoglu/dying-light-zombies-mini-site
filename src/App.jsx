import Zombies from "./components/Zombies";
import logo from "./assets/dl-logo.png";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <img src={logo} alt="Main logo" className="main-logo" />
      <h1 className="dl-header">Dying Light Zombi Rehberine Hoş geldiniz!</h1>
      <Zombies />
      <p>
        <i>Created by MSE.</i>
      </p>
    </div>
  );
}

export default App;
