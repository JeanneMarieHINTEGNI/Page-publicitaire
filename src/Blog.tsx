import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
         <h1 style={{fontSize:'3.5rem', color: '#ffffff'}}>strategies for <span className="text-neon">growth</span></h1> 
      <div className='mt-4' style={{color: '#ffffff', fontSize:'1.2rem'}}>Stay ahead with expert marketing tips, industry trends, and </div>
      <div style={{color: '#ffffff', fontSize:'1.2rem'}}>actionable insights to scale and grow your business successfully.</div>
        </div>
          </Col>
          
        </Row>
        </Container>
        <Container fluid className='d-flex flex-column align-items-center justify-content-center text-center bg-white '>
        <Row>
          <Col>
          hgfdx
          </Col>

          <Col>
          
          </Col>

          <Col>
          
          </Col>

          <Col>
          
          </Col>

          <Col>
          
          </Col>

          <Col>
          
          </Col>
        </Row>
        <Row>
          
          <Col></Col>
         
        </Row>
        <Row>
          <Col>
          
          </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Blog