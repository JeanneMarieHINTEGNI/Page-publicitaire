import React from 'react'
import { Button, Card, Carousel, Col, Container, Dropdown, Form, InputGroup, Nav, Navbar, NavDropdown, Row, SplitButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Services from './Services'
import Work from './Work'
import NavbarComponent from './Navbar'
import About from './About'
import Testimonials from './Testimonials'
import Blog from './Blog'
import Footer from './Footer'
import { BrowserRouter as Router } from 'react-router-dom';
import Upreach from './Upreach'

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Container fluid className="m-0 p-0">
       <section id="upreach"><Upreach /></section>  
        <section id="work"><Work /></section>
        <section id="services"><Services /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="about"><About /></section>
        <section id="blog"><Blog /></section>
      </Container>
      <Footer />
    </Router>
  )
}

export default App