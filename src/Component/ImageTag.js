import React, { useState } from 'react';

function ImageTag({image}) {
  const [imageUrl, setImageUrl] = useState(image);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageUrl("assets/image/noimage.png");
    setImageError(true);
  };

  return (
    <>
        {/* {imageError} */}
      <img
        src={imageUrl}
        alt="Your Image"
        onError={handleImageError}
      />
    </>
  );
}

export default ImageTag;
