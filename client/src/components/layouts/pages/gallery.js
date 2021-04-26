import React from 'react';
import { Container } from 'react-bootstrap';
import Gi1 from '../assets/galleryimages/1.jpeg';
import Gi2 from '../assets/galleryimages/2.jpeg';
import Gi3 from '../assets/galleryimages/3.jpeg';
import Gi4 from '../assets/galleryimages/4.jpeg';
import Gi5 from '../assets/galleryimages/5.jpeg';
import Gi6 from '../assets/galleryimages/6.jpeg';
import Gi7 from '../assets/galleryimages/7.jpeg';
import Gi8 from '../assets/galleryimages/8.jpeg';
import Gi9 from '../assets/galleryimages/9.jpeg';
import Gi10 from '../assets/galleryimages/10.jpeg';
import Footer from '../components/footer';
import TopSection from '../components/topsection';
import Gallerysvg from '../assets/gallery.svg';

export default function gallery() {
  const style1 = {
    fontWeight: 800,
    marginTop: '60px',
  };

  const style2 = {
    fontWeight: 500,
  };

  return (
    <div className='gallery-holder'>
      <Container>
        <TopSection
          headimage={Gallerysvg}
          head='Gallery'
          description='All memories made throughout our history is collectd here'
        />

        {/* <h3 style = {style1}>Gallery</h3>
                <p style = {style2}>All memories made throughout our history is collectd here</p> */}

        <div className='row'>
          <div className='collumn'>
            <img src={Gi1} alt='img' />
            <img src={Gi2} alt='img' />
            <img src={Gi3} alt='img' />
          </div>

          <div className='collumn'>
            <img src={Gi4} alt='image' />
            <img src={Gi5} alt='image' />
            <img src={Gi6} alt='image' />
          </div>

          <div className='collumn'>
            <img src={Gi7} alt='image' />
            <img src={Gi8} alt='image' />
            <img src={Gi9} alt='image' />
            <img src={Gi10} alt='image' />
          </div>
        </div>
      </Container>

      <br></br>
    </div>
  );
}
