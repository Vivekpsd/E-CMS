import React, { useState } from 'react';
import './pages.css';
import Card from '../card/card';
import Navbar from '../components/navbar';
import { Container } from 'react-bootstrap';
import Topsection from '../components/topsection';
import Titles from '../components/bellowts';
import FeaturedCource from '../components/featuredCource';
import Footer from '../components/footer';
import Svg from '../assets/undraw_teaching_f1cm.svg';

function Home() {
  const [cardState] = useState({
    cards: [
      {
        id: '1',
        title:
          '2021 Complete Python Bootcamp 2021 Complete Python Bootcamp 2021 Complete Python Bootcamp',
        instructor: 'joe Biden',
        price: '$200',
      },
      {
        id: '2',
        title: '2021 Complete Python Bootcamp',
        instructor: 'joe Biden',
        price: '$200',
      },
      {
        id: '3',
        title: '2021 Complete Python Bootcamp',
        instructor: 'joe Biden',
        price: '$200',
      },
      {
        id: '4',
        title: '2021 Complete Python Bootcamp',
        instructor: 'joe Biden',
        price: '$200',
      },
    ],
  });

  let cards = (
    <div className='cards-container'>
      {cardState.cards.map((card, index) => {
        return (
          <Card
            title={card.title}
            instructor={card.instructor}
            price={card.price}
            key={card.id}
          />
        );
      })}
    </div>
  );

  return (
    <div className='App'>
      <Container>
        <Topsection
          headimage={Svg}
          head='E-GURUKUL'
          description={
            <p>
              A new way to get educate <br /> and learn from anywhere.
            </p>
          }
        />
        <Titles />
      </Container>
      <hr />
      <Container fluid>
        <div className='heading-bts'>
          <h3>The world's best selection of courses</h3>
          <p>
            Choose from various courses taught by the professional teachers.
          </p>
        </div>
        {cards}
        <FeaturedCource
          title='Expand your career opportunities with Python'
          description="Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability."
          explore='Explore more >'
        />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
