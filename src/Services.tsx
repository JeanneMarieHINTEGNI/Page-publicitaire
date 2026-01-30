import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Collier from './Images/Collier.jpeg';
import Bijoux from './Images/Bijoux.jpeg';
import Bijoux2 from './Images/Bijoux2.jpeg';

const Services = () => {
  return (
    <Container className='d-flex flex-column align-items-center justify-content-center text-center'
    style={{ 
        minHeight: '80vh',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <h1>Success You Can See</h1>
      <p className=' fs-5'>A glimpse into our most impactful projects and success stories.</p>
       <Carousel data-bs-theme="dark"
        controls={false}     // Enlève les flèches (précédent/suivant)
        indicators={true}    // Garde les petits traits en bas (optionnel, mettre false pour tout enlever)
        interval={1000}      // Vitesse de défilement (3000ms = 3 secondes)
        pause={false} 
        >
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Collier}
          alt="Première diapositive"
          style={{ objectFit: 'cover', height: '500px', borderRadius:'50px' }} // Optionnel : pour ajuster la taille
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Bijoux}
          alt="Second slide"
          style={{ objectFit: 'cover', height: '500px', borderRadius:'50px' }} // Optionnel : pour ajuster la taille
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={Bijoux2}
          alt="Third slide"
          style={{ objectFit: 'cover', height: '500px', borderRadius:'50px' }} // Optionnel : pour ajuster la taille

        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </Container>
  )
}

export default Services