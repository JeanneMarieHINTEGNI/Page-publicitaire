import { Col, Container, Row } from 'react-bootstrap'
import Chloé from './Images/Chloé.png'
import Profil_1 from './Images/Profil_1.png'
import Profil_2 from './Images/Profil_2.png'
import Profil_3 from './Images/Profil_3.png'
import Profil_4 from './Images/Profil_4.png'
const Testimonials = () => {
  return (
    <Container 
    style={{ 
        minHeight: '80vh',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Row className="text-center mt-5">
          <Col className='w-100'>
            <h1 style={{ fontSize: '50px' }}>What Our Clients Say</h1>
            <p style={{ fontSize: '1.3rem' }}>Our clients’ words reflect our commitment to excellence.</p>
          </Col>
        </Row>
        <Row className=' d-flex justify-content-center g-0' style={{width:'80%'}}>
          
          <Col md={4} xs={12} xl={4} className="mb-4">
  <div className="p-4 h-100" style={{ 
      backgroundColor: '#f7f3f3ff', 
      borderRadius: '24px', 
      border: '1px solid rgba(255,255,255,0.05)',
      transition: 'transform 0.3s ease',
      width: '80%'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <div className="mb-3" style={{ color: '#ccff00' }}>★★★★★</div>
    
    <p className="text-black-50 italic">
      "La qualité des bijoux et le sérieux de l'accompagnement ont transformé notre business. Un partenaire indispensable."
    </p>
    
    <div className="d-flex align-items-center mt-4">
      <img 
        src={Chloé} 
        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} 
        alt="Client"
      />
      <div className="ms-3">
        <h6 className="text-white mb-0">Sarah Jenkins</h6>
        <small className="text-secondary">Directrice, Bijouterie Éclat</small>
      </div>
    </div>
  </div>
</Col>
<Col md={4} xs={12} xl={4} className="mb-4">
  <div className="p-4 h-100" style={{ 
      backgroundColor: '#f7f3f3ff', 
      borderRadius: '24px', 
      border: '1px solid rgba(255,255,255,0.05)',
      transition: 'transform 0.3s ease',
      width: '80%'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <div className="mb-3" style={{ color: '#ccff00' }}>★★★★★</div>
    
    <p className="text-black-50 italic">
      "La qualité des bijoux et le sérieux de l'accompagnement ont transformé notre business. Un partenaire indispensable."
    </p>
    
    <div className="d-flex align-items-center mt-4">
      <img 
        src={Chloé} 
        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} 
        alt="Client"
      />
      <div className="ms-3">
        <h6 className="text-white mb-0">Sarah Jenkins</h6>
        <small className="text-secondary">Directrice, Bijouterie Éclat</small>
      </div>
    </div>
  </div>
</Col>
<Col md={4} xs={12} xl={4} className="mb-4">
  <div className="p-4 h-100" style={{ 
      backgroundColor: '#f7f3f3ff', 
      borderRadius: '24px', 
      border: '1px solid rgba(255,255,255,0.05)',
      transition: 'transform 0.3s ease',
      width: '80%'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <div className="mb-3" style={{ color: '#ccff00' }}>★★★★★</div>
    
    <p className="text-black-50 italic">
      "La qualité des bijoux et le sérieux de l'accompagnement ont transformé notre business. Un partenaire indispensable."
    </p>
    
    <div className="d-flex align-items-center mt-4">
      <img 
        src={Chloé} 
        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} 
        alt="Client"
      />
      <div className="ms-3">
        <h6 className="text-white mb-0">Sarah Jenkins</h6>
        <small className="text-secondary">Directrice, Bijouterie Éclat</small>
      </div>
    </div>
  </div>
</Col>
<Col md={4} xs={12} xl={4} className="mb-4">
  <div className="p-4 h-100" style={{ 
      backgroundColor: '#f7f3f3ff', 
      borderRadius: '24px', 
      border: '1px solid rgba(255,255,255,0.05)',
      transition: 'transform 0.3s ease',
      width: '80%'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <div className="mb-3" style={{ color: '#ccff00' }}>★★★★★</div>
    
    <p className="text-black-50 italic">
      "La qualité des bijoux et le sérieux de l'accompagnement ont transformé notre business. Un partenaire indispensable."
    </p>
    
    <div className="d-flex align-items-center mt-4">
      <img 
        src={Chloé} 
        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} 
        alt="Client"
      />
      <div className="ms-3">
        <h6 className="text-white mb-0">Sarah Jenkins</h6>
        <small className="text-secondary">Directrice, Bijouterie Éclat</small>
      </div>
    </div>
  </div>
</Col>
<Col md={4} xs={12} xl={4} className="mb-4">
  <div className="p-4 h-100" style={{ 
      backgroundColor: '#f7f3f3ff', 
      borderRadius: '24px', 
      border: '1px solid rgba(255,255,255,0.05)',
      transition: 'transform 0.3s ease',
      width: '80%'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <div className="mb-3" style={{ color: '#ccff00' }}>★★★★★</div>
    
    <p className="text-black-50 italic">
      "La qualité des bijoux et le sérieux de l'accompagnement ont transformé notre business. Un partenaire indispensable."
    </p>
    
    <div className="d-flex align-items-center mt-4">
      <img 
        src={Chloé} 
        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} 
        alt="Client"
      />
      <div className="ms-3">
        <h6 className="text-white mb-0">Sarah Jenkins</h6>
        <small className="text-secondary">Directrice, Bijouterie Éclat</small>
      </div>
    </div>
  </div>
</Col>
<Col md={4} xs={12} xl={4} className="mb-4">
  <div className="p-4 h-100" style={{ 
      backgroundColor: '#f7f3f3ff', 
      borderRadius: '24px', 
      border: '1px solid rgba(255,255,255,0.05)',
      transition: 'transform 0.3s ease',
      width: '80%'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <div className="mb-3" style={{ color: '#ccff00' }}>★★★★★</div>
    
    <p className="text-black-50 italic">
      "La qualité des bijoux et le sérieux de l'accompagnement ont transformé notre business. Un partenaire indispensable."
    </p>
    
    <div className="d-flex align-items-center mt-4">
      <img 
        src={Chloé} 
        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} 
        alt="Client"
      />
      <div className="ms-3">
        <h6 className="text-white mb-0">Sarah Jenkins</h6>
        <small className="text-secondary">Directrice, Bijouterie Éclat</small>
      </div>
    </div>
  </div>
</Col>

        </Row>
        <Row className='d-flex flex-column align-items-center justify-content-center text-center bg-light mb-5' style={{height:'750px', width:'80%',marginTop:'7rem'}} >
          <Col >
          <div className='justify-content-center align-items-center' style={{marginTop:'8rem'}}>
            <h1 style={{ fontSize: '50px' }}>Meet our amazing team.</h1>
            <p style={{ fontSize: '1.1rem' }}>We are a team of strategists, designers, and innovators</p>
            <p className='ms-5 mt-3'>passionate about helping agencies grow.</p>
            </div>
             <div className="marquee-container overflow-hidden bg-transparent mt-5 w-100 py-2" style={{marginLeft:'50px'}}>   
              <div className="d-flex marquee-wrapper " >
                <div className="marquee-content d-flex align-items-center gap-2">
                  {[Chloé, Profil_1, Profil_2, Profil_3, Profil_4].map((src, index) => (
                    <img key={index} src={src} alt="" style={{height:'300px', width:'300px', borderRadius:'20px', flexShrink: 0}}/>
                  ))}
                </div>
                <div className="marquee-content d-flex align-items-center me-3 ms-3 gap-2" >
                  {[Chloé, Profil_1, Profil_2, Profil_3, Profil_4].map((src, index) => (
                    <img key={index} src={src} alt="" style={{height:'300px', width:'300px', borderRadius:'20px', flexShrink: 0}}/>
                  ))}
                  </div>
              </div>
             </div>
          </Col>
        </Row>

      </Container>
  )
}

export default Testimonials