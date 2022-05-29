import React from 'react'
import Navbar from '../components/Navbar'

function NewBeer() {


    const handleSubmit = async (e) =>{
        e.preventDefault()
    }

  return (
    <div>
        
        <Navbar/><br/>
        <h1>New Beer</h1>
        <form>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name'/><br/>

            <label htmlFor='tagline'>Tagline</label>
            <input type='text' name='tagline'/><br/>

            <label htmlFor='description'>Description</label>
            <input type='text' name='description'/><br/>

            <label htmlFor='first_brewed'>First brewed</label>
            <input type='text' name='first_brewed'/><br/>

            <label htmlFor='brewers_tips'>Brewers tips</label>
            <input type="text" name='brewers_tips'/><br/>

            <label htmlFor='attenuation_level'>Attenuation level</label>
            <input type='number' name='attenuation_level'/><br/>

            <label htmlFor='contributed_by'>Contributed by</label>
            <input type='text' name='contributed_by'/><br/>
            <button onClick={handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default NewBeer