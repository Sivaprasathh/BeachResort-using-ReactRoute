import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from "../components/Services";
import FeaturedRoom from  "../components/FeaturedRooms";

function Home (){
     
    return(
  <div>
      <Hero>
          <Banner title = "luxurious rooms" subtitle="starting rooms 
            at INR3000">
           <Link to ="/rooms" className = "btn-primary">
               Our Rooms
               </Link>  
  
          </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
  </div>
    )
}

export default Home;