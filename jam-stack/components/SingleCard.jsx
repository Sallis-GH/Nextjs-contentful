import React from 'react'

const SingleCard = ({name, description, image}) => {
  return (
      <div className="card mb-3">
        <div className="row g-0 single-card-width">
          <div className="col-md-4 d-flex justify-content-center">
            <img src={image} className="img-fluid rounded-start pt-5 card-image-top pb-5" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title pt-5">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SingleCard