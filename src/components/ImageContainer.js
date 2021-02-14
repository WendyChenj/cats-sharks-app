import React from 'react';
import Loader from './Loader';

import './imageContainer.css';

const ImageContainer = ({imageUrl, loading}) => {

  let imageContainerComponent = (
    <div className='no-image-title-container'>
      <div className='no-image-title-1-container'>
        <p>Wanna see some cute kitties or sharks?</p>
      </div>

      <div className='no-image-title-2-container'>
        <p>Sure!</p>
      </div>

      <div className='no-image-title-3-container'>
        <p>Choose your faviourite animal and click the button above!</p>
      </div>
    </div>
  );

  if (imageUrl) {
    imageContainerComponent = (
      <div>
        <img src={imageUrl} className='animal-image' />
      </div>
    );
  } else if (loading) {
    imageContainerComponent = (
      <div className='image-container-loader'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='image-container'>
      {imageContainerComponent}
    </div>
  );
}

export default ImageContainer;