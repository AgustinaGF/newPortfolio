import { Container, Row, Col } from "react-bootstrap"
import navIcon1 from "../assets/image/nav-icon1.svg";
import navIcon2 from "../assets/image/nav-icon2.svg";
import navIcon3 from "../assets/image/nav-icon3.svg";

export const Footer =() =>{
return(
    <footer className="footer">

        <div className='container-footer'>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/agustina-gomez-fernandez/"
							target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/AgustinaGF" target="blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://twitter.com/Agustinagomezf" target="blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p className="text">Copyright 2023. All Rights Reserved</p>
        </div>
    </footer>
)
}