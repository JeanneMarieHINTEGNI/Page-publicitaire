import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Reunion from './Images/Reunion.jpeg'
const About = () => {
  return (
    <Container fluid className='d-flex flex-column align-items-center justify-content-center text-center bg-neon-upreach-dark m-0 p-0 me-0' style={{height:'900px', }}>
      <Row className='d-flex align-items-center justify-content-center' >
        <Col data-aos="fade-up" data-aos-duration="1000">
        <div>
         <h1 style={{fontSize:'3.5rem'}}>Innovation meets </h1>
         <h1 style={{fontSize:'3.5rem'}}>strategy,<span className="text-neon">fueling growth.</span></h1> 
      <div className='mt-4' style={{color: '#ffffff', fontSize:'1.2rem'}}>Helping businesses thrive with innovative digital strategies,</div>
      <div style={{color: '#ffffff', fontSize:'1.2rem'}}>creative solutions, and measurable outcomes.</div>
        </div>
        </Col>
       </Row>
       <Row className='' style={{marginTop:'80px'}}>
       <Col data-aos="fade-up" data-aos-duration="1000">
       <div style={{
      height: '500px',
      width: '100%',
      maxWidth: '1300px',
      borderRadius: '50px', // Un peu plus grand que l'image pour un effet fluide
      border: '13px solid var(--upreach-border-color)', // Ta couleur néon
      overflow: 'hidden', // IMPORTANT : Coupe l'image pour qu'elle ne dépasse pas de la bordure
      display: 'block'
    }}>
      <img 
        src={Reunion} 
        alt="Reunion"
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover', // Garde les proportions sans déformer
        }} 
      />
    </div>
       </Col>
      </Row>
      
     
      
    </Container>
  )
}

export default About