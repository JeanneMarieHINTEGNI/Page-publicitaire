import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <section id='contact-section'>
    <Container fluid 
      className="bg-neon-upreach-dark" 
    >
      <Row >
          <Col className="d-flex justify-content-center align-items-center mt-3">
          <div>
         <h1 style={{fontSize:'3.5rem', color: '#ffffff'}}>Expert insights &  </h1>
         <h1 style={{fontSize:'3.5rem', color: '#ffffff'}}>strategies for<span className="text-neon"> growth</span></h1> 
      <div className='mt-4' style={{color: '#ffffff', fontSize:'1.2rem'}}>Stay ahead with expert marketing tips, industry trends, and </div>
      <div style={{color: '#ffffff', fontSize:'1.2rem'}}>actionable insights to scale and grow your business successfully.</div>
        </div>
          </Col>
          
        </Row>
        </Container>
        <Container fluid className='mt-5'>
      <Row>
        <Col className="d-flex justify-content-center align-items-center mt-5 ">
        <form action="" method="post" className=' bg-light p-5 mb-5' style={{width: '50rem', borderRadius: '15px'}}>
          <label htmlFor="">Enter your full name.</label>
          <input type="text" placeholder="Enter your full name" className="form-control form-control-lg mb-3" style={{width: '400px'}} />
          <label htmlFor="">Enter a valid email for a response.</label>
          <input type="email" placeholder="Enter your email" className="form-control form-control-lg mb-3" style={{width: '400px'}} />
          <label htmlFor="">Which services are you interested in?</label>
          <input type="text" id="services" name="services" placeholder='Web development' className="form-control form-control-lg mb-3" style={{width: '400px'}} />
          <label htmlFor="consent" className="mb-3" style={{color: '#070000ff'}}>Share any details or specific requirements.</label>
          <textarea name="details" id="details" cols="30" rows="5" placeholder='Your message...' className="form-control form-control-lg mb-3" style={{width: '44rem'}}></textarea>
          <button type="submit" className="btn btn-neon btn-lg w-100 mt-5">Subscribe</button>
        </form>
        </Col>
      </Row>
        </Container>
        </section>
  )
}

export default Contact