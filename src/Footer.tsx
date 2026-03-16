import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer className="py-5 bg-neon-upreach-dark" style={{ color: '#ffffff' }}> 
   <Container>
    <Row>
      <Col xs={12}>
      <div  className="text-start" style={{fontSize:'1.5rem'}}>Upreach</div> 
      </Col>
    </Row>
    <Row className="mt-3">
      <Col xs={12} md={7} xl={7}>
      <div className="text-start" style={{fontSize:'1.2rem'}}>
Stay Connected & Informed</div>
<div className="text-start">Subscribe to our newsletter for the marketing insights, </div>
<div className="text-start">trends, & growth strategies to scale your business. </div>
<div className='d-flex mt-3'>
  <input type="email" placeholder="Email adress" className="form-control " 
  style={{backgroundColor:'#375c6b',
    color:'#ffffff',
    width:'300px',
    border:'#375c6b',
    height:'45px',
     borderRadius:"12px"
  }}/>
  <Button className='btn-neon ms-3' style={{borderRadius:"0.5rem"}}>Get Notified</Button>
</div>
      </Col>
      <Col xs={12} md={2} xl={2} className="mt-4 mt-md-0 text-end">
      <div>Sections</div>
      <div className='mt-3'>Services</div>
      <div className='mt-3'>Team</div>
      <div className='mt-3'>Testimonials</div>
      </Col>

      <Col xs={12} md={3} xl={3} className="mt-4 mt-md-0 text-end">
      <div>Information</div>
      <div className='mt-3'>FAQ's</div>
      <div className='mt-3'>404</div>
      <div className='mt-3'>Contact</div>
      </Col>
      </Row>
      <hr className='mt-5'/>
      <Row>
        <Col xs={12} md={6} xl={6}>
        <div className='mt-3'>Copyright © 2024 – All Right Reserved</div>
        </Col>
        <Col xs={12} md={6} xl={6}>
        <div className='mt-3 text-end'>Created by Khurram</div>
        </Col>
      </Row>
   </Container>
   </footer>
  )
}

export default Footer