import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import { NavBar } from '../components/navbar';
import { Carousel } from '../components/carousel';

function HomePage() {
  return (
    // <div className="min-h-screen w-screen bg-white flex dark:bg-black">

    // </div>
    <>

      <NavBar/>
      <Carousel/>
      
    </>
  );
}

export default HomePage;
