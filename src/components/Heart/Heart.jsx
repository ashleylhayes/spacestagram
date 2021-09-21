import React, { useState, useEffect } from 'react';
import GreyHeart from '../../assets/icons/grey-heart.png';
import PurpleHeart from '../../assets/icons/purple-heart.png';
import './Heart.scss';

function Heart(props) {

    const [animation, setAnimation] = useState(0)
    const toggle = props.toggle
    const itemId = props.itemId

    useEffect(() => {
        const renderAnimations = () => {
            return toggle ? setAnimation(1) : setAnimation(0)
        }
        renderAnimations()
    }, [toggle])

    const renderHeart = () => {
        return toggle ? PurpleHeart : GreyHeart
    }

    return (
        <div className='heart-container'>
            <img 
            className="heart" 
            id={itemId}
            onClick={() => props.handleClick()} 
            src={renderHeart()}
            animation={animation} 
            alt="Heart" />
        </div>
    )
}

export default Heart;