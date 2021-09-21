import React from 'react';
import './Image.scss';
import LikeButton from '../LikeButton/LikeButton';

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
                            <p className='card__date'>{image.earth_date}</p>
                            <h2 className='card__title'>{image.rover.name}</h2>
                            <p className='card__explanation'>{image.camera.full_name}</p>
                            <LikeButton />
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