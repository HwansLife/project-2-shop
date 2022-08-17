import React from 'react'
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Navbar from './../components/Navbar';

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar />
        <Slider />
    </div>
  )
}

export default Home