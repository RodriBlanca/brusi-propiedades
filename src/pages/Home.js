import React from 'react';
// Components
import Hero from '../components/Hero/Hero';
import HomeServices from '../components/HomeServices/HomeServices';

const Home = () => {
  return (
    <main className='home'>
      <Hero />
      <HomeServices />
    </main>
  )
}

export default Home;