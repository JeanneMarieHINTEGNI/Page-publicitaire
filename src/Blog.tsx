import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Blog = () => {
  return (
    <Container
    style={{ 
        minHeight: '80vh',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <Row>
          <Col className="d-flex justify-content-center align-items-center"> 
          <h1>Expert insights & strategies for <span className="text-neon">growth</span> </h1>
          </Col>
        </Row>
        <Row>
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
  )
}

export default Blog