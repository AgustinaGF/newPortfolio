import { useState, useEffect } from "react"
import { Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/image/header-img.svg'

export const Banner=()=>{
    const [loopNum,setLoopNum]= useState(0);
    const toRotate =['Frontend Developer', 'Web Developer'];
    const [isDeleting,setIsDeleting]=useState(false)
    const [text, setText]= useState('')
    const period=2000;
    const [delta, setDelta]=useState(300 - Math.random()*1000)

    useEffect(()=>{let ticket= setInterval(()=>{

    })},[])

return(<section className="banner" id='home'>
    <Container><Row className="align-items-center"><Col xs={12} md={6} xl={7}>
        <span>Welcome to my portfolio</span>
        <h1>{`Hi I'm Agustina Gomez Fernandez`}<span className="wrap"> Frontend Developer</span></h1>
        <p></p>
        <button onClick={()=>console.log('connect')}>Let's connect<ArrowRightCircle/></button>
        </Col>
        <Col xs={12} md={6} xl={5}><img src={headerImg} alt="header Img"></img></Col>
        </Row>
        </Container>
</section>)
}