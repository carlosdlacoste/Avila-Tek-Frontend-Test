import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import { NavBar } from '../components/navbar';
import { Carousel } from '../components/carousel';
import { Categories } from '../components/categories';
import { Featured } from '../components/featured';
import { Popular } from '../components/popular';

function HomePage() {
  return (
    // <div className="min-h-screen w-screen bg-white flex dark:bg-black">

    // </div>
    <>

      <NavBar/>
      <Carousel/>
      <div className='container mx-auto'>
        <Categories/>
        <Featured/>
        <Popular/>
      </div>

    </>
  );
}

export default HomePage;
