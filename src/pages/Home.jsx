import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Home</h1><br/>
        <NavLink to="/beers">All beers</NavLink><br/>
        <NavLink to="/random-beer">Random Beer</NavLink><br/>
        <NavLink to="/new-beer">New Beer</NavLink>
    </div>
  )
}

export default Home