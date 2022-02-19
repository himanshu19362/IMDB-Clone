import React from 'react';
import HeaderCard from '../HeaderCard/HeaderCard';
import InTheatreCard from '../InTheatreCard/InTheatreCard';
import ConditionalCard from '../ConditionalCard/ConditionalCard';

function Home(props) {

  

  // console.log(props.trendingMovies)

  return (
    <>
        <HeaderCard />            
        <InTheatreCard />
        <ConditionalCard />  
    </>
  );
}



export default Home;
