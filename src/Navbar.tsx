import { Button, Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const CustomNavbar = () => {
  useEffect(() =>{
    AOS.init({duration:1000});
  },[]);
  return (
    <BootstrapNavbar 
      sticky="top" 
      className="bg-neon-upreach-dark" 
      style={{ height: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
    >
      <Container fluid className="px-5 d-flex align-items-center justify-content-between" data-aos="zoom-out-down">
        
        <Nav.Link href="#upreach" className="text-white fw-bold fs-4 m-0 ">
          Upreach
        </Nav.Link>

        <Nav className="d-none d-md-flex gap-4">
          <Nav.Link href="#services" className=" text-white" style={{fontSize:'17px'}}>Services</Nav.Link>
          <Nav.Link href="#work" className=" text-white" style={{fontSize:'17px'}}>Work</Nav.Link>
          <Nav.Link href="#testimonials" className=" text-white" style={{fontSize:'17px'}}>Testimonials</Nav.Link>
          <Nav.Link href="#about" className="text-white" style={{fontSize:'17px'}}>About</Nav.Link>
          <Nav.Link href="#blog" className="text-white" style={{fontSize:'17px'}}>Blog</Nav.Link>
        </Nav>

        <Button 
          className="btn-neon border-0 text-dark fw-bold" 
          style={{ 
            borderRadius: '50px', 
            padding: '10px 25px',
            marginRight:'330px'
          }}
        >
          Contact us
        </Button>

      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;