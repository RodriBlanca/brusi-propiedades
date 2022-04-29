import React from 'react';
// Components
import Hero from '../components/Hero/Hero';
import HomeServices from '../components/HomeServices/HomeServices';
import HomeFeaturedProperties from '../components/HomeFeaturedProperties/HomeFeaturedProperties';

const Home = () => {
  return (
    <main className='home'>
      <Hero />
      <HomeServices />
      <HomeFeaturedProperties />
    </main>
  )
}

export default Home;