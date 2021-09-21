import React, { useState } from 'react';
import Heart from '../Heart/Heart';
import {v4 as uuidv4} from 'uuid';

function LikeButton() {

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div className='like-button' key={uuidv4()}>
            <Heart
            handleClick={handleClick}
            toggle={toggle}
            itemId={uuidv4()} />
        </div>
    );
}

export default LikeButton;