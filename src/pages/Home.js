import React from 'react';
// Components
import Hero from '../components/Hero/Hero';
import HomeServices from '../components/HomeServices/HomeServices';
import HomeFeaturedProperties from '../components/HomeFeaturedProperties/HomeFeaturedProperties';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <main className='home'>
      <Hero />
      <HomeServices />
      <HomeFeaturedProperties />
      <Contact />
    </main>
  )
}

export default Home;