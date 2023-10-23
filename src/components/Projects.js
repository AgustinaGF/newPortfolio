import Podcast from '../assets/image/Podcast.png';
import Gif from '../assets/image/Gifs.png';
import Delilah from '../assets/image/Delilah.png';
import Movies from '../assets/image/Movies.jpeg';
import Games from '../assets/image/Games.jpeg';
import Python from '../assets/image/Python.jpeg';
import Pokemom from '../assets/image/Pokemon.jpeg';
import Keywise from '../assets/image/Keywise.jpeg';
import Facebook from '../assets/image/FlutterProject.jpeg';
import Ecommerce from '../assets/image/Ecommerce.jpeg';
import { Container,Col,Row,Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/image/color-sharp2.png';

export const Projects =()=>{
    
   const projects=[
    {title:'Podcast',
    description:'This was my first project, it is a static responsive website with HTML and CSS. From this site you can listen to real podcasts with images and texts related to the content.',
    imgUrl:Podcast,
    },
    {title:'GifOS Project',
    description:'This is a Gifs website, I created it with JavaScript and it is integrated with the Giphy API, on this site you can search, view and create Gifs.',
    imgUrl:Gif,
    },
    {title:'Delilah Resto',
    description:'In this project I integrated an API that allows performing CRUD operations for a restaurant. NodeJS, Express, Sequelize, JWT, Dotenv, bcrypt, MySQL and Postman were used.',
    imgUrl:Delilah,
    },
    {title:'Movies',
    description:'poner description',
    imgUrl:Movies,
    },
     {title:'Games',
    description:'poner description',
    imgUrl:Games,
    },
    {title:'Python Project',
    description:'poner description',
    imgUrl:Python,
    },
    {title:'Pokedex',
    description:'poner description',
    imgUrl:Pokemom,
    },
    {title:'Ecommerce',
    description:'poner description',
    imgUrl:Ecommerce,
    },
    {title:'Keywise',
    description:'poner description',
    imgUrl:Keywise,
    },
    {title:'Flutter Project Facebook',
    description:'poner description',
    imgUrl:Facebook,
    },
   ] 
   return(
   <section className='project' id='project'>
    <Container>
        <Row>
           <Col>
           <h2>Projects</h2>
           <Tab.Container id='projects-tabs' defaultActiveKey='first'>
           <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
            <Nav.Item>
                <Nav.Link eventKey='first'>Tab One</Nav.Link>
            </Nav.Item>
             <Nav.Item>
                <Nav.Link eventKey='second'>Tab Two</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey='third'>Tab Three</Nav.Link>
            </Nav.Item>
           </Nav>
           <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row className='container-images'>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
            <Tab.Pane eventKey='second'>Lorem</Tab.Pane>
            <Tab.Pane eventKey='third'>Lorem</Tab.Pane>
           </Tab.Content>
           </Tab.Container>
           </Col> 
        </Row>
    </Container>
    <img className='background-image-right' src={colorSharp2} alt='color-img'></img>
   </section>
   )
}