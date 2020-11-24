import React, { useState } from 'react';

function generatepet() {
  const petPhotos = ['pet-1.jpg', 'pet-2.jpeg', 'pet-3.jpg'];
  const petRandomizerNum = Math.floor(Math.random() * (petPhotos.length));
  return `/imgs/${petPhotos[petRandomizerNum]}`;
}

const Addpet = props => {
  const [petName, setpetName] = useState('');

  return (
    <React.Fragment>
      <div className="form-group">
        <label>Pet name</label>
        <input
          placeholder="Mr. Doodle"
          className="form-control"
          onChange={e => setpetName(e.target.value)}/>
          <small className="form-text text-muted">
            Pick a good pet name.
          </small>
      </div>
      <button
        className="btn btn-primary"
        onClick={() =>
          props.onSubmit
          && petName.length
          && props.onSubmit({
            name: petName.trim(),
            picURL: generatepet(),
          })}>
        Submit
      </button>
    </React.Fragment>
  )
}

export default Addpet;