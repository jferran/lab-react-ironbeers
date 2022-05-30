import React from 'react'
import { NavLink } from 'react-router-dom'

import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function Home() {
  return (
    <div className='card-group justify-content-center'>

        <NavLink className='mb-3' to="/beers">
        <div className="card col-12">
            <img src={beers} className="card-img-top" alt="..."/>
            <div className="card-body text-start">
                <h5 className="card-title">All beers</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        </NavLink>

        <NavLink className='mb-3' to="/random-beer">
        <div className="card col-12 mb-3" >
            <img src={newBeer} className="card-img-top" alt="..."/>
            <div className="card-body text-start">
                <h5 className="card-title">Random beer</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        </NavLink>

        <NavLink className='mb-3' to="/new-beer">
        <div className="card">
            <img src={randomBeer} className="card-img-top" alt="..."/>
            <div className="card-body text-start">
                <h5 className="card-title">New beer</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        </NavLink>
        
        
    </div>
  )
}

export default Home