import axios from "axios";
import React, {useEffect, useState} from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function SingleBeer({beer, id}) {
    const [foundBeer, setFoundBeer] = useState(null)
    const [fetching, setFetching] = useState(true)
    useEffect(()=>{
        getBeer()
    },[])
    const getBeer = async () => {
        try {
            if(!beer) {
                const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
                setFoundBeer(response.data)
            }
            else setFoundBeer(beer)
            setFetching(false)

        } catch (error) {
            
        }

    }
    if(fetching) return (<div>...Loading</div>)
    
  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = foundBeer;
  console.log(beer)
  return (
    <div>
      <img src={image_url} alt="" height="200px" />
      <h2>{name}</h2>
      <h3>{tagline}</h3>
      <h4>
        <b>Created by: </b>
        {contributed_by}
      </h4>
    </div>
  );
}

export default SingleBeer;
