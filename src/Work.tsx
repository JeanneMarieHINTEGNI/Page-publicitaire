import { Container } from 'react-bootstrap'
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

const Work = () => {
  return (
    <Container className='d-flex flex-column align-items-center justify-content-center text-center bg-light' style={{height:'750px'}}>
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
  )
}

export default Work