import React, { useState, useEffect, createContext } from 'react';
import axios from '../services/axios';
import requests from '../services/requests';

export const BreedContext = createContext();

export const BreedProvider = ({ children, breed, limit, prevBreed }) => {
  const [breeds, setBreeds] = useState([]);
  const [showMore, setShowMore] = useState(limit);
  const [statusText, setStatusText] = useState('Load more');

  // renders limit change when load more button is clicked
  // currently missing a reset of the limit to its default = 10
  useEffect(() => {
    async function fetchData() {
      if (breed.length !== 0) {
        const request = await axios.get(requests.fetchBreed + 'page=1&limit=' + showMore + '&breed_id=' + breed);
        setBreeds(request.data);
      }
    }
    fetchData();
  }, [showMore, breed]);

  // handles previous state for selected breed when back button is clicked
  useEffect(() => {
    async function fetchPrevData() {
      const request = await axios.get(requests.fetchBreed + 'page=1&limit=' + showMore + '&breed_id=' + prevBreed);
      if (prevBreed) setBreeds(request.data);
    }
    fetchPrevData();
  }, [showMore, prevBreed])

  return (
    <BreedContext.Provider value={[breeds, setBreeds]}>
      {children}
      <div className="row">
        {breeds.length === 0 ? <div className="col-12">
          <p>No cats available</p>
        </div> : null}
        <div className="col-md-3 col-sm-6 col-12">
          <button
            type="button"
            className="btn btn-success"
            style={{ marginTop: "1rem" }}
            onClick={() => { setShowMore(showMore + limit) }} disabled={breeds.length < showMore}>{statusText}</button>
        </div>
      </div>
    </BreedContext.Provider>
  );
}