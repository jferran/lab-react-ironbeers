import axios from 'axios';
import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import {useNavigate} from "react-router-dom"

function NewBeer() {
    const navigate = useNavigate()
    const [state, setState] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    })
    const handleChange = (e) =>{
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })
    }


    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const beer = state;
            const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beer)
            navigate('/beers')
        } catch (error) {
            navigate('/beers')
        }
    }

  return (
    <div>
        
        <Navbar/><br/>
        <h1>New Beer</h1>
        <form>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' onChange={handleChange} value={state.name}/><br/>

            <label htmlFor='tagline'>Tagline</label>
            <input type='text' name='tagline' onChange={handleChange} value={state.tagline}/><br/>

            <label htmlFor='description'>Description</label>
            <input type='text' name='description' onChange={handleChange} value={state.description}/><br/>

            <label htmlFor='first_brewed'>First brewed</label>
            <input type='text' name='first_brewed' onChange={handleChange} value={state.first_brewed}/><br/>

            <label htmlFor='brewers_tips'>Brewers tips</label>
            <input type="text" name='brewers_tips' onChange={handleChange} value={state.brewers_tips}/><br/>

            <label htmlFor='attenuation_level'>Attenuation level</label>
            <input type='number' name='attenuation_level' onChange={handleChange} value={state.attenuation_level}/><br/>

            <label htmlFor='contributed_by'>Contributed by</label>
            <input type='text' name='contributed_by' onChange={handleChange} value={state.contributed_by}/><br/>
            <button onClick={handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default NewBeer