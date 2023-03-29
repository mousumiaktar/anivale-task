import React from 'react';

const ImgCard = ({image}) => {
    const {webformatURL} = image;
    return (
        <div>
            <img className='w-68 h-52' src={webformatURL} alt="" />
        </div>
    );
};

export default ImgCard;