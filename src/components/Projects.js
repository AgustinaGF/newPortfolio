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
import { Container,Col,Row } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard.js';
import colorSharp2 from '../assets/image/color-sharp2.png';

export const Projects =()=>{
    
   const projects=[
    {title:'Podcast',
    description:'This was my first project, it is a static responsive website with HTML and CSS. From this site you can listen to real podcasts with images and texts related to the content.',
    imgUrl:Podcast,
    url:'https://proyecto-podcast-delta.vercel.app'
    },
    {title:'GifOS Project',
    description:'This is a Gifs website, I created it with JavaScript and it is integrated with the Giphy API, on this site you can search, view and create Gifs.',
    imgUrl:Gif,
    url:'https://proyecto-gifs.vercel.app'
    },
    {title:'Delilah Resto',
    description:'In this project I integrated an API that allows performing CRUD operations for a restaurant. NodeJS, Express, Sequelize, JWT, Dotenv, bcrypt, MySQL and Postman were used.',
    imgUrl:Delilah,
    url:'https://github.com/AgustinaGF/Proyecto-Delilah-Resto'
    },
    {title:'Movies',
    description:'React-Movies is a React-based movie website that allows users to search for movies by title and view the movie description. The website is designed to be user-friendly and visually appealing.',
    url:'https://movies-project-reactapp.netlify.app/',
    imgUrl:Movies
    },
     {title:'Super Arcade ',
    description:'This is a project created with Vite.js using React and Typescript. The user can play memotest, word per minute and guess the pokemon.',
    url:'https://super-arcade.vercel.app/',
    imgUrl:Games
    },
    {title:'Python Project',
    description:'It is an Ecommerce page for musical records, created with Python and Django. As a user you can see the products, artists and musical genres that the record store has to offer you, in turn you can perform searches from the SearchBar of the page.',
    url:'https://github.com/AgustinaGF/projectPython',
    imgUrl:Python
    },
    {title:'Pokedex',
    description:'Project with TypeScript and React created with viteJs.It is responsive design',
    url:'https://pokedextsandreact.netlify.app/',
    imgUrl:Pokemom
    },
    {title:'Ecommerce',
    description:'This is an Ecommerce created with Next.js, React and Typescript. It uses Google Sheets as a database.It has tests with Jest and Cypress',
    url:'https://next-ecommerce-snowy-phi.vercel.app/',
    imgUrl:Ecommerce
    },
    {title:'Keywise',
    description:'This project was created with: React, Typescript, Material UI, Graphql, Web3Modal, Solidity and Cedalio. It was presented on Ethereum Argentina and we won an Aave bounty.',
    url:'https://keywise.com.ar/',
    imgUrl:Keywise
    },
    {title:'Flutter Project Facebook',
    description:'This project is a copy of facebook created with flutter',
    url:'https://facebookflutterproject.web.app/',
    imgUrl:Facebook
    },
   ] 
   return(
   <section className='project' id='projects'>
    <Container>
        <Row>
           <Col>
           <h2>Projects</h2>
           
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
           </Col> 
        </Row>
    </Container>
     <image className="background-image-right" src={colorSharp2}></image>
   </section>
   )
}