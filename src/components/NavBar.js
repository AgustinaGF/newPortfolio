import { useState, useEffect } from 'react';
import {Navbar, Container, Nav,} from 'react-bootstrap';
import logo from '../assets/image/logo.svg'
import navIcon1 from '../assets/image/nav-icon1.svg'
import navIcon2 from '../assets/image/nav-icon2.svg'
import navIcon3 from '../assets/image/nav-icon3.svg'


export const NavBar =()=>{
    const [activeLink,setActiveLink]=useState('');
    const [scrolled, setScrolled]= useState(false);

    const onUpdateActiveLink=(value)=>{
      setActiveLink(value)
    }

    useEffect(()=>{const onScroll=()=>{

      if(window.scrollY>50){
        setScrolled(true);
      }else{
        setScrolled(false)
      }
    }
  window.addEventListener('scroll', onScroll)
  return()=>window.removeEventListener('scroll',  onScroll)
  
  },[])
  return (
    <Navbar expand="md" className={scrolled?"scrolled":""} >
      <Container>
        <Navbar.Brand href="/home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={activeLink=== 'home'? 'active-navbar-link':'navbar-link'} href="#home" onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link className={activeLink=== 'skills'? 'active-navbar-link':'navbar-link'} href="#skills" onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
           <Nav.Link className={activeLink=== 'projects'? 'active-navbar-link':'navbar-link'} href="#projects" onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
           
            <div className='social-icon'>
            <a href='#'><img src={navIcon1} alt='icon1'/></a>
            <a href='#'><img src={navIcon2} alt='icon2'/></a>
            <a href='#'><img src={navIcon3} alt='icon3'/></a>
            </div>
            <button className='vvd' onClick={()=>console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}