import React from "react";

function SingleBeer({ beer }) {
  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = beer;
  return (
    <div>
      SingleBeer
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
