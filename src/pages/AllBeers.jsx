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
            setBeerList(response.data)
            setFetching(false);
        } catch (error) {
            console.log("Error", error)
        }
    }
    
    const handleSearch = async (event) =>{
        setSearch(event.target.value)
        //setFetching(true)
        try {
            const query=search;
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            setBeerList(response.data)
            //setFetching(false)
        } catch (error) {
            //console.log("ERROR", error)
        }
    }
    if(fetching) return (<div>...Loading</div>)
  return (
    <div>
        <Navbar/><br/>
        <label htmlFor='search'>Search:</label><br/>
        <input type='text' name='search' onChange={handleSearch} value={search}/>
        {
            beerList.map((beer) => {
                return (
                    <Link key={beer._id} to={`/beers/${beer._id}`} state={{beer: beer}}>
                        <div className='row text-start' >
                            <div className='col'>
                                <img src={beer.image_url} alt='' height='200px'/>
                            </div>
                            <div className='col-9'>
                                <h2>{beer.name}</h2>
                                <h3>{beer.tagline}</h3>
                                <h5><b>Created by: </b>{beer.contributed_by}</h5>
                                
                            </div>
                        </div>
                    </Link>
                    )
                })
        }
    </div>
  )
}

export default AllBeers