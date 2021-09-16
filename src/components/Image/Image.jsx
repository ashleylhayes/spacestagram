import React from 'react';
import './image.scss';

function Image(props) {

    const displayImages = (props) =>{
        const {images} = props;

        if(images.length > 0) {
            return (
                images.map((image, index) => {
                    console.log(image);
                    return(
                        <div className='card' key={index}>
                            <img className='card__image' src={image.url} alt={image.title} />
                            <h2 className='card__title'>{image.title}</h2>
                            <p className='card__date'>{image.date}</p>
                            <p className='card__explanation'>{image.explanation}</p>
                        </div>
                    )
                })
            )
        } else {
            return(<h3>Images Loading...</h3>)
        }
    }
    return (
        <>
            {displayImages(props)}
        </>
    )
}

export default Image;