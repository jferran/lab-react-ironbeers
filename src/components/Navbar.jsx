import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-light bg-light">
          <div class="container justify-content-center">
            <NavLink to="/">🏠</NavLink>
          </div>
        </nav>
    </div>
  )
}

export default Navbar