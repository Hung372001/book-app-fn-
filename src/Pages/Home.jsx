import React from 'react'
import Slider from '../Components/Slider/Slider'
import LabTabs from '../Components/Tabs/Tabs'
import bookItem from './../data/BookItem'
const Home = () => {
 
  console.log(...bookItem)
  return (
    <div className="bg-[#f0f0f0]">
        <Slider/>
       
{bookItem.map(dt=>
  
  (
    <LabTabs {...dt}/>
  ))}
    
       
       
    </div>
  );
}

export default Home