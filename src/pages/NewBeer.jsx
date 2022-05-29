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
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beer)
            navigate('/beers')
        } catch (error) {
            navigate('/beers')
        }
    }

  return (
    <div>
        
        <Navbar/><br/>
        <h1>New Beer</h1>
        <form className='text-start'>
            <div className='mb-3'>
                <label className="form-label" htmlFor='name'>Name</label>
                <input className="form-control" type='text' name='name' onChange={handleChange} value={state.name}/><br/>
            </div>
            <div className='mb-3'>
                <label className="form-label" htmlFor='tagline'>Tagline</label>
                <input className="form-control" type='text' name='tagline' onChange={handleChange} value={state.tagline}/><br/>
            </div>
            <div className='mb-3'>
                <label className="form-label" htmlFor='description'>Description</label>
                <input className="form-control" type='text' name='description' onChange={handleChange} value={state.description}/><br/>
            </div>
            <div className='mb-3'>
                <label className="form-label" htmlFor='first_brewed'>First brewed</label>
                <input className="form-control" type='text' name='first_brewed' onChange={handleChange} value={state.first_brewed}/><br/>
            </div>
            <div className='mb-3'>
                <label className="form-label" htmlFor='brewers_tips'>Brewers tips</label>
                <input className="form-control" type="text" name='brewers_tips' onChange={handleChange} value={state.brewers_tips}/><br/>
            </div>
            <div className='mb-3'>
                <label className="form-label" htmlFor='attenuation_level'>Attenuation level</label>
                <input className="form-control" type='number' name='attenuation_level' onChange={handleChange} value={state.attenuation_level}/><br/>
            </div>
            <div className='mb-3'>
                <label className="form-label" htmlFor='contributed_by'>Contributed by</label>
                <input className="form-control" type='text' name='contributed_by' onChange={handleChange} value={state.contributed_by}/><br/>
            </div>
                <button onClick={handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default NewBeer