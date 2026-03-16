import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import AOS from 'aos';
import Complet from './Images/Complet.jpeg';

const Blog = () => {
  
  return (
    <section>
    <Container
    style={{ 
        minHeight: '80vh',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      className='bg-neon-upreach-dark'
      >
        <Row >
          <Col className="d-flex justify-content-center align-items-center">
          <div>
         <h1 style={{fontSize:'3.5rem', color: '#ffffff'}}>Expert insights &  </h1>
         <h1 style={{fontSize:'3.5rem', color: '#ffffff'}}>strategies for<span className="text-neon"> growth</span></h1> 
      <div className='mt-4' style={{color: '#ffffff', fontSize:'1.2rem'}}>Stay ahead with expert marketing tips, industry trends, and </div>
      <div style={{color: '#ffffff', fontSize:'1.2rem'}}>actionable insights to scale and grow your business successfully.</div>
        </div>
          </Col>
          
        </Row>
        </Container>
        <Container className='d-flex flex-column align-items-center justify-content-center text-center bg-white '>
        <Row className='d-flex '>
          <Col xs={12} md={6} xl={6} className='mt-3'>
          <div className='d-flex flex-column'>
            <img src={Complet} alt="" 
            style={{height:"20rem", width:"30rem"}}
            />
            <a href="#services">Hello</a>
          </div>
          </Col>

          <Col xs={12} md={6} xl={6} className='mt-3'>
           <div>
            <img src={Complet} alt="" 
            style={{height:"20rem", width:"30rem"}}
            />
            <a href="#services">Hello</a>
          </div>
          </Col>

          <Col xs={12} md={6} xl={6} className='mt-3'>
           <div>
            <img src={Complet} alt="" 
            style={{height:"20rem", width:"30rem"}}
            />
            <a href="#services">Hello</a>
          </div>
          </Col>

          <Col xs={12} md={6} xl={6} className='mt-3'>
           <div>
            <img src={Complet} alt="" 
            style={{height:"20rem", width:"30rem"}}
            />
            <a href="#services">Hello</a>
          </div>
          </Col>

          <Col xs={12} md={6} xl={6} className='mt-3'>
           <div>
            <img src={Complet} alt="" 
            style={{height:"20rem", width:"30rem"}}
            />
            <a href="#services">Hello</a>
          </div>
          </Col>

          <Col xs={12} md={6} xl={6} className='mt-3'>
           <div>
            <img src={Complet} alt="" 
            style={{height:"20rem", width:"30rem"}}
            />
            <a href="#services">Hello</a>
          </div>
          </Col>
        </Row>
        <Row>
          
          <Col></Col>
         
        </Row>
    </Container>
     <Container className='d-flex align-items-center justify-content-center text-center bg-light  mt-3 mb-3' style={{minHeight:'50vh'}} data-aos="fade-up">
        <Row className='bg-neon-upreach-dark'>
          <Col className="d-flex flex-column justify-content-center align-items-center" style={{}}> 
          <div style={{ width: '1000px',borderRadius: '15px', height: '350px' }} className='bg-neon-upreach-dark text-white '>
         <h1 style={{fontSize:'3.5rem', color: '#ffffff'}}>Ready to elevate your brand  </h1>
         <h1 style={{fontSize:'3.5rem', color: '#ffffff'}}>and unlock new growth?</h1> 
      <div className='mt-4' style={{color: '#ffffff', fontSize:'1.2rem'}}>With years of experience, we’ve helped businesses generate</div>
      <div style={{color: '#ffffff', fontSize:'1.2rem'}}>millions partner with us to scale confidently.</div>
        </div>
        <button className="btn btn-neon mt-3 mb-5" style={{height:"50px", width:"10rem"}}>Get Started</button>
          </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Blog