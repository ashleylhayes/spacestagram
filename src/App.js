import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from './components/Image/Image';
import './App.scss';

function App() {

  const [images, getImages] = useState('');

  const URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
  const API_KEY = 'api_key=2p9fUMCADNCNMdwd5EHBkJTblfsunFTZ0mWSqNMp';
  const EARTH_DATE = '&earth_date=2021-09-01';

  useEffect(() => {
    getAllImages();
  }, []);

  const getAllImages = () => {
    axios.get(URL + API_KEY + EARTH_DATE)
    .then ((res) => {
      console.log(res.data.photos);
      const allImages = res.data.photos;
      //adding data to state
      getImages(allImages);
    })
    .catch (error => console.error(`Error: ${error}`));
  }

  return (
    <div className="App">
      <h1>Spacestagram</h1>
      <div className='card-container'>
        <Image images={images} />
      </div>
    </div>
  );
}

export default App;
