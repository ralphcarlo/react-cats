import React, { useContext, useState } from 'react';
import { BreedProvider } from './BreedContext';
import { BreedsContext } from './BreedsContext';
import Cats from './Cats';

const BreedSelection = ({ cachedBreed, history }) => {
  const [breeds] = useContext(BreedsContext);
  const [cat, setCat] = useState([]);
  const [limit] = useState(10);

  function handleChange(e) {
    setCat(e.target.value);
  }

  return (
    <>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <div className="form-group">
            <label className="form-label" htmlFor="breed">Breed</label>
            <select className="form-control" onChange={handleChange} disabled={breeds.length === 0}>
              <option value>Select Breed</option>
              {breeds.map(breed => (
                <option key={breed.id} value={breed.id}>{breed.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <BreedProvider breed={cat} prevBreed={cachedBreed.replace('?breed=', '')} limit={limit}>
        <Cats />
      </BreedProvider>
    </>

  );
}

export default BreedSelection;