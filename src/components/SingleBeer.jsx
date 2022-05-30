import axios from "axios";
import React, {useEffect, useState} from "react";

function SingleBeer({beer, id}) {
    const [foundBeer, setFoundBeer] = useState(null)
    const [fetching, setFetching] = useState(true)
    useEffect(()=>{
        getBeer()
    })
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
    <div className="text-start">
      <img src={image_url} alt="" height="200px" className="mx-auto d-block"/>
      <div className="row">
        <div className="col-9">
          <h2>{name}</h2>
          <h3 className='fw-light'>{tagline}</h3>
        </div>
        <div className="col-3 text-end">          
          <h3 className='fw-light'>{attenuation_level}</h3>
          <h3>{first_brewed}</h3>
        </div>
      </div>
      <h3>{description}</h3>
      <h4 className='fw-light'>
        <b>Created by: </b>
        {contributed_by}
      </h4>
    </div>
  );
}

export default SingleBeer;
