import Container from "react-bootstrap/Container";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import icon from "./images/logo.png";

function HeaderBar() {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img src={icon} height="100px" width="170px" alt="logo" />
          </div>
          <div>
            <button className="contactBtn">Connect Wallet</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeaderBar;
