import React from 'react';

const ImgCard = ({ image }) => {
    const { webformatURL } = image;
    return (
        <div className='bg-white'>
            <img className='w-full h-52' src={webformatURL} alt="" />
            <p className='my-4 mx-2 text-lg'><strong>Image by:</strong> {image.user}</p>
            <p className='my-4 mx-2'><strong>Tags:</strong> {image.tags}</p>
            <p className='my-4 mx-2'><strong>Resolution:</strong> {image.imageHeight} X {image.imageWidth}</p>
        </div>
    );
};

export default ImgCard;