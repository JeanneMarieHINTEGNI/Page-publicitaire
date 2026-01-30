import { Button, Col, Container, Row } from 'react-bootstrap'
import Geminiimage from './Images/Geminiimage.png'
const Upreach = () => {
  return (
    <Container className='bg-neon-upreach-dark text-white d-flex flex-column justify-content-space-between align-items-center px-5'  
    style={{ 
        minHeight: '80vh',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#050505', 
        color: 'white',
        padding : '50px 10%',
      }}>
        <Row className='d-flex w-100 mb-4'> 
          <Col className='d-flex justify-content-center' xs={12} md={6} lg={8}>
          <div style={{marginRight:'160px'}}>
            <h1 className='me-auto' style={{fontSize:"70px"}}>Grow your business, <br /> master every move.</h1>
       <p className='me-auto' style={{fontSize:"20px"}}>Helping businesses thrive with innovative digital strategies, <br /> creative solutions, and measurable outcomes.</p>
       <Button className='btn-neon text-Black me-auto' style={{borderRadius:"75px", width:"150px", height:"50px"}}>Book a call</Button>
       <Button className='btn-neonen text-white  me-auto ms-3' style={{borderRadius:"75px", width:"150px", height:"50px"}}>Learn more</Button>
          </div>
          
          </Col>
          <Col xs={12} md={6} lg={4} className='d-flex justify-content-center '>
       <img src={Geminiimage} alt="Gemini Image" style={{height:'550px', width:'450px', borderRadius:'35px'}} />
          
          </Col>
           <div className="marquee-container overflow-hidden bg-transparent mt-5 w-50 py-2" style={{marginLeft:'50px'}}>
        <div className="d-flex marquee-wrapper">
        <div className="marquee-content d-flex align-items-center">
          <div className="marquee-item px-4 py-2  text-white rounded-pill mx-2">Logoipsum</div>
          <div className="marquee-item px-4 py-2 text-white rounded-pill mx-2">Logoipsum</div>
          <div className="marquee-item px-4 py-2 text-white rounded-pill mx-2">Logoipsum</div>
          <div className="marquee-item px-4 py-2 text-white rounded-pill mx-2">Logoipsum</div>
          <div className="marquee-item px-4 py-2 text-white rounded-pill mx-2">Logoipsum</div>
        </div>
        <div className="marquee-content d-flex align-items-center">
          <div className="marquee-item px-4 py-2 text-white rounded-pill mx-2">Logoipsum</div>
          <div className="marquee-item px-4 py-2 text-white rounded-pill mx-2">Logoipsum</div>
          <div className="marquee-item px-4 py-2 text-white rounded-pill mx-2">Logoipsum</div>
          <div className="marquee-item px-4 py-2 text-white rounded-pill mx-2">Logoipsum</div>
          <div className="marquee-item px-4 py-2 text-white rounded-pill mx-2">Logoipsum</div>
          </div>
        
      </div>
          </div>
        </Row>
          
      
    </Container>
  )
}

export default Upreach