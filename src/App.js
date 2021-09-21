import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from './components/Image/Image';
import Header from './components/Header/Header';
import Arrow from './assets/icons/arrow.png';
import './App.scss';

function App() {

  const [images, getImages] = useState('');

  const URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
  const API_KEY = 'api_key=2p9fUMCADNCNMdwd5EHBkJTblfsunFTZ0mWSqNMp';
  const EARTH_DATE = '&earth_date=2021-09-17';

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

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Header />
      <div className='card-container'>
        <Image images={images} />
      </div>

      {showButton && (
        <button onClick={scrollToTop} className="to-top-button">
          <img className='to-top-button__arrow' src={Arrow} alt='purple pixelated arrow' />
        </button>
      )}
    </div>
  );
}

export default App;
