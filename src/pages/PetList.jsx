import React from 'react';

const PetList = props => (
  <div>
    <h1>Pet list</h1>
      {props.pets.length>0?props.pets
        .map((pet, i) => 
          <div className="card mb-2">
            <img className="img-fluid" src={process.env.PUBLIC_URL+pet.picURL} alt="😬something wrong" />
            <div className="card-body">
              <h5 className="card-title">
                Hi my name is, {pet && pet.name}
              </h5>
            </div>
          </div>
        ):<h6 className="mt-3">First add some pet to display! </h6>}
  </div>
)

export default PetList;