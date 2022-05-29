import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'

function AllBeers() {
    const [beerList, setBeerList] = useState(null)
    const [fetching, setFetching] = useState(true)

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
  return (
    <div>
        <Navbar/><br/>
        <h1>All Beers</h1>
        {
            beerList.map((beer) => {
                return (
                    <li key={beer._id}>
                        <img src={beer.image_url} alt='' height='200px'/>
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <h4><b>Created by:</b>{beer.contributed_by}</h4>
                    </li>
                    )
                })
        }
    </div>
  )
}

export default AllBeers