import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SingleBeer from '../components/SingleBeer';

function Beer() {
    const {id} = useParams()
    const location = useLocation()
    console.log("e",location.state)
    let beer = null
    if(location.state && location.state.beer) beer = location.state.beer
    //const beer=location.state.beer
      console.log(beer)
      return (
        <div>
          <Navbar/><br/>
          <div className='container'>
            <SingleBeer beer={beer} id={id}/>
          </div>
        </div>
      );
}

export default Beer