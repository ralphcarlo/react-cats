import React from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import '../static/scss/Cat.scss';

const BackButton = withRouter(({ history, breedId }) => {
  console.log(history)
  return <button className="btn btn-primary" onClick={() => history.push(`/?breed=${breedId}`)}>Back</button>
});

const Cat = () => {
  const location = useLocation();
  const catData = location.state.detail.breeds[0];

  return (
    <div className="Cat">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <BackButton breedId={catData.id} />
          </div>
          <img className="card-img" src={location.state.detail.url} />
          <div className="card-body">
            <h4>{catData.name}</h4>
            <h5>Origin: {catData.origin}</h5>
            <h6>{catData.temperament}</h6>
            <p>{catData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cat;