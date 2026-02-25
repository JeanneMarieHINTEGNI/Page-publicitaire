import { Card, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Collier from './Images/Collier.jpeg';
import Bijoux from './Images/Bijoux.jpeg';
import Bijoux2 from './Images/Bijoux2.jpeg';
import Chaine_1 from './Images/Chaine_1.jpeg';
import Chaine_2 from './Images/Chaine_2.jpeg';
import Chaine_3 from './Images/Chaine_3.jpeg';
import Complet from './Images/Complet.jpeg';
import Complet_2 from './Images/Complet 2.jpeg';
import Parure from './Images/Parure.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {CircleX, CircleCheck} from 'lucide-react';

const Work = () => {
  useEffect(() =>{
    AOS.init({duration:1000});
  },[]);
  return (
    <section id='work' className="min-vh-100">
       
    <Container className='d-flex flex-column align-items-center justify-content-center text-center bg-light' style={{height:'750px'}} data-aos="fade-up">
      <h1>Success You Can See</h1>
      <p className=' fs-5'>A glimpse into our most impactful projects and success stories.</p>
      <div className="marquee-container overflow-hidden bg-transparent mt-5 w-100 py-2" style={{marginLeft:'50px'}}>
        <div className="d-flex marquee-wrapper" >
        <div className="marquee-content d-flex align-items-center ">
          {[Collier, Bijoux, Bijoux2, Chaine_1, Chaine_2, Chaine_3, Complet, Complet_2, Parure].map((src, index) => (
            <img key={index} src={src} alt="" style={{height:'400px', width:'350px', borderRadius:'20px'}}/>
          ))}
        </div>
        <div className="marquee-content d-flex align-items-center me-3 ms-3" >
          {[Collier, Bijoux, Bijoux2, Chaine_1, Chaine_2, Chaine_3, Complet, Complet_2, Parure].map((src, index) => (
            <img key={index} src={src} alt="" style={{height:'400px', width:'350px', borderRadius:'20px'}}/>
          ))}
          </div>
      </div>
      </div>
      
    </Container>
    <Container fluid className='d-flex flex-column align-items-center justify-content-center text-center bg-neon-upreach-dark '>
         <Row className='mt-2'>
                   <Col xs={12} className='order-1 order-md-1 order-xl-1' data-aos="fade-up">
              <div>
         <h1 style={{fontSize:'3.5rem'}}>Why Upreach Stands Out </h1>
      <div className='mt-4' style={{color: '#ffffff', fontSize:'1.2rem'}}>Here's how Upreach delivers more value, clarity, and results</div>
      <div style={{color: '#ffffff', fontSize:'1.2rem'}}>compared to typical service providers.</div>
        </div>
              </Col>
                 </Row>
                  <Row className='d-flex mt-3 '>
            <Col xs={12} md={6} xl={6} className=' order-1 order-md-1 order-xl-1' data-aos="fade-right">
            <h3>Others Agencies</h3>
            <Card className='bg-neon-upreach-dark border border-5 ' style={{height:'300px', borderRadius:'20px',}}>
            <div className='ms-3 d-flex justify-content-start align-content-start mt-2'>
                <CircleX 
                color="#f3f0f0ff" 
                size={25} 
                strokeWidth={1.5} 
              />
             
        <p className=' ms-2 ' style={{ color: '#f3f0f0', fontSize: '1.15rem', fontWeight: '400' }}>
        Generic, one-size-fits-all strategies
      </p>
    </div>
    <div className='ms-3 d-flex justify-content-start align-content-start mt-2'>
                <CircleX 
                color="#f3f0f0ff" 
                size={25} 
                strokeWidth={1.5} 
              />
             
        <p className=' ms-2 ' style={{ color: '#f3f0f0', fontSize: '1.15rem', fontWeight: '400' }}>
        Focus on vanity metrics (likes, shares)
      </p>
    </div>
    <div className='ms-3 d-flex justify-content-start align-content-start mt-2'>
                <CircleX 
                color="#f3f0f0ff" 
                size={25} 
                strokeWidth={1.5} 
              />
             
        <p className=' ms-2 ' style={{ color: '#f3f0f0', fontSize: '1.15rem', fontWeight: '400' }}>
        Slow response times and poor communication
      </p>
    </div>
    <div className='ms-3 d-flex justify-content-start align-content-start mt-2'>
                <CircleX 
                color="#f3f0f0ff" 
                size={25} 
                strokeWidth={1.5} 
              />
             
        <p className=' ms-2 ' style={{ color: '#f3f0f0', fontSize: '1.15rem', fontWeight: '400' }}>
        Minimal post-launch support or guidance
      </p>
    </div>
    <div className='ms-3 d-flex justify-content-start align-content-start mt-2'>
                <CircleX 
                color="#f3f0f0ff" 
                size={25} 
                strokeWidth={1.5} 
              />
             
        <p className=' ms-2 ' style={{ color: '#f3f0f0', fontSize: '1.15rem', fontWeight: '400' }}>
        Use outdated marketing techniques
      </p>
    </div>
           
            </Card>
            </Col>
            <Col xs={12} md={6} xl={6} className=' order-2 order-md-2 order-xl-2' data-aos="fade-left">
            <h3>Upreach</h3>
            <Card className='bg-neon-upreach-dark border border-5' style={{height:'300px',  borderRadius:'20px', border: '13px solid var(--upreach-border-color)'}}>
            <div className='ms-3 d-flex justify-content-start align-content-start mt-4'>
                <CircleCheck 
                color="#f3f0f0ff" 
                size={25} 
                strokeWidth={1.5} 
              />
             
        <p className=' ms-2 ' style={{ color: '#f3f0f0', fontSize: '1.15rem', fontWeight: '400' }}>
        Custom strategies tailored to your business goals
      </p>
    </div>
    <div className='ms-3 d-flex justify-content-start align-content-start mt-2'>
                <CircleCheck 
                  color="#f3f0f0ff" 
                  size={25} 
                  strokeWidth={1.5} 
                />
             
        <p className=' ms-2 ' style={{ color: '#f3f0f0', fontSize: '1.15rem', fontWeight: '400' }}>
        Focus on real KPIs like leads, conversions, and ROI
      </p>
    </div>
    <div className='ms-3 d-flex justify-content-start align-content-start mt-2'>
                <CircleCheck 
                  color="#f3f0f0ff" 
                  size={25} 
                  strokeWidth={1.5} 
                />
             
        <p className=' ms-2 ' style={{ color: '#f3f0f0', fontSize: '1.15rem', fontWeight: '400' }}>
       Transparent communication and dedicated support
      </p>
    </div>
    <div className='ms-3 d-flex justify-content-start align-content-start mt-2'>
                <CircleCheck 
                  color="#f3f0f0ff" 
                  size={25} 
                  strokeWidth={1.5} 
                />
             
        <p className=' ms-2 ' style={{ color: '#f3f0f0', fontSize: '1.15rem', fontWeight: '400' }}>
        Use the latest tools and data-driven marketing tactics
      </p>
    </div>
   <div className='ms-3 d-flex justify-content-start align-content-start mt-2'>
                <CircleCheck 
                  color="#f3f0f0ff" 
                  size={25} 
                  strokeWidth={1.5} 
                />
             
        <p className=' ms-2 ' style={{ color: '#f3f0f0', fontSize: '1.15rem', fontWeight: '400' }}>
        Provide long-term support and optimization
      </p>
    </div>
           
            </Card>
            </Col>
          </Row>
         </Container>
    </section>
  )
}

export default Work