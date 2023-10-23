import { Container, Row, Col } from "react-bootstrap"
import navIcon1 from "../assets/image/nav-icon1.svg";
import navIcon2 from "../assets/image/nav-icon2.svg";
import navIcon3 from "../assets/image/nav-icon3.svg";
export const Footer =() =>{
return(
    <footer className="footer">
    <Container>
        <div className=" row align-items-center" >
            <Col size={12}  className="text-center justify-content-center">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </div>
    </Container>

    </footer>
)
}