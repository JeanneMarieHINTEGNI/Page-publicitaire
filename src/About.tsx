import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container fluid className='d-flex flex-column align-items-center justify-content-center text-center bg-neon-upreach-dark m-0 p-0 me-0' style={{height:'800px', }}>
      <div className='d-flex align-items-center justify-content-center'>
       <h1>Innovation meets 
        strategy,<span className="text-neon">fueling growth.</span>
      </h1>
      </div>
      
      <div>Helping businesses thrive with innovative digital strategies,</div>
      <div>creative solutions, and measurable outcomes.</div>
      
    </Container>
  )
}

export default About