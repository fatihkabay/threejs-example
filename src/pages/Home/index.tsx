import "../../index.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../textures/logo.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="header">
        <img className="logo" src={Logo} alt="" />
        <div className="box-container">
          <div className="box" onClick={() => navigate("")}>
            Moving Car
          </div>
          <div className="box">example 1</div>
          <div className="box">example 2</div>
          <div className="box">example 3</div>
        </div>
      </div>
      <h1 className="title">Welcome</h1>
      <p className="description">
        This website was made for the development of three js related projects.
      </p>
    </div>
  );
}

export default Home;
