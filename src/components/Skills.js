import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from '../assets/image/color-sharp.png'




export const Skills =()=>{

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const SKILLS = [
     {name: 'JavaScript',
    image:"https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
    },
    {name: 'React',
    image:"https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor",
    },
    {name: 'Vue',
    image:"https://icongr.am/devicon/vuejs-original.svg?size=128&color=currentColor",
    },
    {name: 'Flutter',
    image:"https://icongr.am/simple/flutter.svg?size=128&color=currentColor&colored=currentColor",
    },
    {name: 'HTML',
    image:"https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor",
    },
    {name: 'Css',
    image:"https://icongr.am/devicon/css3-original-wordmark.svg?size=128&color=currentColor",
    },
    {name: 'Sass',
    image:"https://icongr.am/devicon/sass-original.svg?size=128&color=currentColor",
    },
    {name: 'Typescript',
    image:"https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
    },
    {name: 'Node.Js',
    image:"https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor",
    },
    {name: 'Express',
    image:"https://icongr.am/devicon/express-original.svg?size=128&color=currentColor",
    },
    {name: 'Python',
    image: "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
    },	
    {name: 'Django',
    image: "https://icongr.am/devicon/django-original.svg?size=128&color=currentColor",
    },	
    {name: 'Github',
    image: "https://icongr.am/devicon/github-original.svg?size=128&color=currentColor",
    },	
]

return(<section className="skill" id="skills">
<Container>
    <Row>
       <Col>
       <div className="skill-bx">
        <h2>Skills</h2>
        <p>Technologies</p>
        <Carousel responsive={responsive} infinite={true} className="skill-slider">
            {SKILLS.map((skill)=>{    
            return(      
            <div className="item">
                <img src={skill.image} alt="Image"/>
                <h5>{skill.name}</h5>
            </div>)
            })}            
        </Carousel>
       </div>
       </Col> 
    </Row>
</Container>
<image className="background-image-left" src={colorSharp}/>
</section>)

}