import React from 'react';
import './Image.scss';
import LikeButton from '../LikeButton/LikeButton';
import MarsImage from '../../assets/images/mars-animation.gif'

function Image(props) {

    const displayImages = (props) =>{
        const {images} = props;

        if(images.length > 0) {
            return (
                images.map((image, index) => {
                    console.log(image);
                    return(
                        <div className='card' key={image.id}>
                            <img className='card__image' src={image.img_src} alt={image.camera.full_name} />
                            <div className='card__details'>
                                <div className='card__date-container'>
                                    <p className='card__date'>{image.earth_date}</p>
                                    <LikeButton />
                                </div>
                                <h2 className='card__title'>{image.rover.name}</h2>
                                <p className='card__explanation'>{image.camera.full_name}</p>
                            </div>
                        </div>
                    )
                })
            )
        } else {
            return (
                <div className='loading'>
                    <img className='loading__image' src={MarsImage} alt='Animated planet Mars spinning around' />
                    <h3>Loading Mars Rover Images...</h3>
                </div>
            )
        }
    }
    return (
        <>
            {displayImages(props)}
        </>
    )
}

export default Image;