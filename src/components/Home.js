import requests from '../services/requests';
import { BreedsProvider } from './BreedsContext';
import BreedSelection from './BreedSelection';

function Home({ location }) {
  return (
    <>
      <BreedsProvider fetchUrl={requests.fetchBreeds}>
        <div className="container">
          <h1>Cat Browser</h1>
          <BreedSelection cachedBreed={location.search} />
        </div>
      </BreedsProvider>
    </>
  );
}

export default Home;