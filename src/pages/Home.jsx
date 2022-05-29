import React from 'react'
import { NavLink } from 'react-router-dom'

import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function Home() {
  return (
    <div>
        <h1>Home</h1><br/>
        <NavLink to="/beers">
        <div className="card" style={{width: '18rem'}}>
            <img src={beers} className="card-img-top" alt="..."/>
            <div className="card-body text-start">
                <h5 className="card-title">All beers</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        </NavLink>

        <NavLink to="/random-beer">
        <div className="card" style={{width: '18rem'}}>
            <img src={newBeer} className="card-img-top" alt="..."/>
            <div className="card-body text-start">
                <h5 className="card-title">Random beer</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        </NavLink>

        <NavLink to="/new-beer">
        <div className="card" style={{width: '18rem'}}>
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