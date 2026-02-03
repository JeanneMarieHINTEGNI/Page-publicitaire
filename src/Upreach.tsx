import { Button, Col, Container, Row } from 'react-bootstrap'
import Geminiimage from './Images/Geminiimage.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Upreach = () => {
useEffect(() =>{
  AOS.init({duration:1000});
},[]);
  return (
    <div >
    <Container fluid className='bg-neon-upreach-dark text-white px-5'  
    style={{ 
        
        
        backgroundColor: '#050505', 
       padding:'100px'
      }}>
        <Row className='d-flex w-100 mb-4'> 
          <Col className='d-flex justify-content-center' xs={12} md={6} lg={8} data-aos="fade-up">
          <div style={{marginRight:'160px'}}>
            <h1 className='me-auto' style={{fontSize:"70px"}}>Grow your business, <br /> master every move.</h1>
       <p className='me-auto' style={{fontSize:"20px"}}>Helping businesses thrive with innovative digital strategies, <br /> creative solutions, and measurable outcomes.</p>
       <Button className='btn-neon text-Black me-auto' style={{borderRadius:"75px", width:"150px", height:"50px"}}>Book a call</Button>
       <Button className='btn-neonen text-white  me-auto ms-3' style={{borderRadius:"75px", width:"150px", height:"50px"}}>Learn more</Button>
        <div className="marquee-container overflow-hidden bg-transparent mt-5  py-2" style={{marginLeft:'50px', width:"500px"}} data-aos="fade-up">
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
          </div>
          
          </Col>
          <Col xs={12} md={6} lg={4} className='d-flex justify-content-center ' data-aos="fade-up">
       <img className="img-fluid" src={Geminiimage} alt="Gemini Image" style={{height:'550px', width:'450px', borderRadius:'35px'}} />
          
          </Col>
          
        </Row>
        </Container>
        <Row className='d-flex flex-column w-100 align-items-center justify-content-center text-center bg-light mt-5' 
        style={{height:'750px',
        }} data-aos="fade-up">
          <Col>
          <h1 style={{ fontSize: '50px' }}>At Upreach, we deliver real results through <br /> <span className="text-neon">high-converting marketing strategies </span> designed to
           <br /> scale your business, attract the right audience, 
           <br /> and<span className="text-neon"> maximize ROI with precision.</span> 
           </h1>
          </Col>
        </Row>
          
      
    
    </div>
  )
}

export default Upreach