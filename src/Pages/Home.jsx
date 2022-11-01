import React from 'react'
import Slider from '../Components/Slider/Slider'
import ColorTabs from '../Components/Tabs/Tabs'
import bookItem from "./../data/BookItem";

const Home = () => {
  return (
    <div className="bg-[#f0f0f0]">
      <Slider />
      {bookItem.map(dt=>(
      <ColorTabs {...dt} />
      ))}
   
    </div>
  );
}

export default Home