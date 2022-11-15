import React from 'react'
import Link from 'next/link'

const Card = ({ id, name, description, image }) => {

  return (
    // <div className='col-12 col-md-6 col-lg-4'>
    <div className='col-auto' >
      <div className="card card-width mt-5 shadow p-3 mb-5 bg-body rounded" >
        <img src={image} className="card-img-top card-image-top mt-3" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text card__description-high overflow-auto">{description}</p>
            <Link href={{pathname:`/beers/${id}`, query:{id, name, description, image}}} as={`/beers/${id}`} className="btn btn-primary">Read More</Link>
          </div>
      </div>
    </div>
  )
}

export default Card;