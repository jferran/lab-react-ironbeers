import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function AllBeers() {
    const [beerList, setBeerList] = useState(null)
    const [fetching, setFetching] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(()=>{
        fetchBeerList();
    }, [])
    const fetchBeerList = async () => {
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            console.log(response)
            setBeerList(response.data)
            setFetching(false);
        } catch (error) {
            console.log("Error", error)
        }
    }
    if(fetching) return (<div>...Loading</div>)
    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }
  return (
    <div>
        <Navbar/><br/>
        <h1>All Beers</h1>
        <label htmlFor='search'>Search:</label><br/>
        <input type='text' name='search' onChange={handleSearch} value={search}/>
        {
            beerList.filter((beer) => {return beer.name.toUpperCase().includes(search.toUpperCase())})
            .map((beer) => {
                return (
                    
                    <li key={beer._id}>
                        <img src={beer.image_url} alt='' height='200px'/>
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <h4><b>Created by:</b>{beer.contributed_by}</h4>
                        <Link key={beer._id} to={`/beers/${beer._id}`} state={{beer: beer}}>GO</Link>
                    </li>
                    )
                })
        }
    </div>
  )
}

export default AllBeers