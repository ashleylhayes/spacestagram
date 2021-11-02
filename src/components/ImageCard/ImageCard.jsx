import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import './ImageCard.scss';
import LikeButton from '../LikeButton/LikeButton';
import MarsImage from '../../assets/images/mars-animation.gif'

const options = {
    thumbnails: {
        showThumbnails: false
    },
    buttons: {
        showAutoplayButton: false,
        showDownloadButton: false,
        showFullscreenButton: false,
        showNextButton: false,
        showPrevButton: false,
        showThumbnailsButton: false

    }
}

function ImageCard(props) {

    const displayImages = (props) =>{
        const {images} = props;

        if(images.length > 0) {
            return (
                images.map((image) => {
                    return(
                        <section className='card' key={image.id}>
                            <SRLWrapper options={options}>
                                <img className='card__image' src={image.img_src} alt={image.camera.full_name} />
                            </SRLWrapper>
                            <div className='card__details'>
                                <div className='card__date-container'>
                                    <p className='card__date'>{image.earth_date}</p>
                                    <LikeButton />
                                </div>
                                <h2 className='card__rover-name'>{image.rover.name} Rover</h2>
                                <p className='card__rover-camera'>{image.camera.full_name}</p>
                            </div>
                        </section>
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

export default ImageCard;