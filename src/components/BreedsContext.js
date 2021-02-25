import React,{useState, useEffect, createContext} from 'react';
import axios from '../services/axios';

export const BreedsContext = createContext();

export const BreedsProvider = ({children, fetchUrl}) => {
  const [cats, setCats] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setCats(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return(
    <BreedsContext.Provider value={[cats, setCats]}>
      {children}
    </BreedsContext.Provider>
  );
}