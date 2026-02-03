import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CircleArrowUp, File, MessageSquare, Pen, Percent, Route} from 'lucide-react';


const Services = () => {
  return (
    <Container className='d-flex flex-column align-items-center justify-content-center text-center bg-light'>
        <Row>
          <Col  data-aos="fade-up">
      <h1>What we offer</h1>
      <p className=' fs-5'>Comprehensive solutions for business success.</p>
      </Col>
      </Row>
      <Row className=' d-flex justify-content-center  mt-4 g-5'>
        <Col>
         <Card className='bg-light text-dark text-start' style={{height:'250px', width:'400px', borderRadius:'25px'}} data-aos="fade-up">
         <Card.Body>
          <CircleArrowUp 
      color="#0a0a0aff" 
      size={28} 
      strokeWidth={1.5} 
      className="mt-3"
    />
          <h4 className='mt-5'>Digital Marketing</h4> 
Maximize online visibility with paid ads, social media, and strategic SEO to drive targeted traffic and higher conversions.
         </Card.Body>

         </Card>
        </Col>

        <Col>
        <Card className='bg-light text-dark text-start' style={{height:'250px', width:'400px', borderRadius:'25px'}} data-aos="fade-up">
         <Card.Body>
          <MessageSquare 
          color="#0a0a0aff" 
      size={28} 
      strokeWidth={1.5} 
      className="mt-3"
          />
          <h4 className='mt-5'>Business Consulting</h4> 
Enhance business strategy, optimize core processes, and leverage real-time analytics for sustainable growth.
         </Card.Body>

         </Card>
        </Col>

        <Col>
        <Card className='bg-light text-dark text-start' style={{height:'250px', width:'400px', borderRadius:'25px'}} data-aos="fade-up">
         <Card.Body>
          <Percent 
          color="#0a0a0aff" 
      size={28} 
      strokeWidth={1.5} 
      className="mt-3"
          />
          <h4 className='mt-5'>Lead Generation</h4> 
Optimize advanced funnels, automate processes, and boost customer conversions to generate leads.
         </Card.Body>

         </Card>
        </Col>

        <Col>
        <Card className='bg-light text-dark text-start' style={{height:'250px', width:'400px', borderRadius:'25px'}} data-aos="fade-up">
         <Card.Body>
          <File 
          color="#0a0a0aff" 
      size={28} 
      strokeWidth={1.5} 
      className="mt-3"
          />
          <h4 className='mt-5'>Brand Strategy</h4> 
Building a powerful, data-driven brand identity that resonates, inspires, and drives long-term success.
         </Card.Body>

         </Card>
        </Col>

        <Col>
        <Card className='bg-light text-dark text-start' style={{height:'250px', width:'400px', borderRadius:'25px'}} data-aos="fade-up">
         <Card.Body>
          <Pen 
          color="#0a0a0aff" 
      size={28} 
      strokeWidth={1.5} 
      className="mt-3"
          />
          <h4 className='mt-5'>Content Writing</h4> 
Crafting compelling, SEO-optimized content that boosts engagement, authority, and conversions.
         </Card.Body>

         </Card>
        </Col>

        <Col>
        <Card className='bg-light text-dark text-start' style={{height:'250px', width:'400px', borderRadius:'25px'}} data-aos="fade-up">
         <Card.Body>
          <Route 
          color="#0a0a0aff" 
      size={28} 
      strokeWidth={1.5} 
      className="mt-3"
          />
          <h4 className='mt-5'>Strategic Planning</h4> 
Generate high-quality leads through targeted campaigns and optimized funnels for maximum conversions.
         </Card.Body>

         </Card>
        </Col>
      </Row>
       
    </Container>
  )
}

export default Services