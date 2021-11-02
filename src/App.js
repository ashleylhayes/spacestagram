import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import { addDays, subDays, getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import ImageCard from './components/ImageCard/ImageCard';
import Header from './components/Header/Header';
import Arrow from './assets/icons/arrow.png';
import './App.scss';
import "react-datepicker/dist/react-datepicker.css";

function App() {

  const yesterday = new Date(new Date().setDate(new Date().getDate()-1))
  const [startDate, setStartDate] = useState(yesterday);
  const [images, setImages] = useState('');
  useEffect(() => {

    const API_KEY = process.env.REACT_APP_NASA;
    const EARTH_DATE = startDate.toLocaleDateString('en-CA');
    const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${API_KEY}&earth_date=${EARTH_DATE}`;

    const getAllImages = () => {
      axios.get( URL )
      .then ((res) => {
        const allImages = res.data.photos;
        setImages(allImages);
      })
      .catch (error => console.error(`Error: ${error}`));
    };
    getAllImages();
  }, [startDate]);

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

  const years = range(2012, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Header />
      <div className='date-container'>
      <p className='date-label'>Choose a Date:</p>
        <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        )}
        dateFormat='yyyy-MM-dd' 
        selected={startDate} 
        onChange={(date) => setStartDate(date)} 
        minDate={subDays(new Date(), 3374)} 
        maxDate={addDays(new Date(), -1)} 
        withPortal
      />
      </div>
      
      <div className='card-container'>
        <ImageCard images={images} />
      </div>

      {showButton && (
        <button onClick={scrollToTop} className="to-top-button">
          <img className='to-top-button__arrow' src={Arrow} alt='purple pixelated arrow pointing toward top of page' />
        </button>
      )}
    </div>
  );
}

export default App;
