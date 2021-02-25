import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BreedContext } from './BreedContext';

const Cats = () => {
  const [cats] = useContext(BreedContext);
  const history = useHistory();

  const handleClick = (data) => {
    console.log(data.id);
    history.push({
      pathname: `/${data.id}`,
      state: { detail: data }
    });
  }

  return (
    <>
      <div className="row">
        {cats.map(cat => (
          <div className="col-md-3 col-sm-6 col-12" key={cat.id}>
            <div className="card">
              <img className="card-img-top" src={cat.url} />
              <div className="card-body">
                <button className="btn btn-primary btn-block" onClick={() => handleClick(cat)}>View details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cats;