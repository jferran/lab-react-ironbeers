import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import SingleBeer from '../components/SingleBeer'

function RandomBeer() {
    const [ beer, setBeer ] = useState()
    const [ fetching, setFetching ] = useState(true)
    useEffect(()=>{
        getBeer()
    },[])
    const getBeer = async () =>{
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        console.log(response)
        setBeer(response.data)
        setFetching(false)

    }
    if(fetching) return (<div>...Loading</div>)
  return (
    <div>
        <Navbar/><br/>
        <h1>Random Beer</h1>
        <SingleBeer beer={beer}/>

    </div>
  )
}

export default RandomBeer