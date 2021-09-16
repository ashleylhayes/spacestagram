import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from './components/Image/Image';

function App() {

  const [images, getImages] = useState('');

  const URL = 'https://api.nasa.gov/planetary/apod?';
  const API_KEY = 'api_key=2p9fUMCADNCNMdwd5EHBkJTblfsunFTZ0mWSqNMp';
  const START_DATE = '&start_date=2021-09-13';

  useEffect(() => {
    getAllImages();
  }, []);

  const getAllImages = () => {
    axios.get(URL + API_KEY + START_DATE)
    .then ((res) => {
      console.log(res.data);
      const allImages = res.data;
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
