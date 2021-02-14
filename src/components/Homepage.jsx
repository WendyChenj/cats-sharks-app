import React, { useState, useEffect } from "react";

const ImagesStateContext = React.createContext({});

const Homepage = () => {
  const [catsDisplay, setCatsDisplay] = useState(false);
  const [sharksDisplay, setSharksDisplay] = useState(false);
  const [imagesState, setImagesState] = useState({
    images: null,
    isFetching: false
  });

  useEffect(() => {
    catsDisplay || sharksDisplay ? fetchImages(): initImagesState();
  }, [catsDisplay, sharksDisplay])

  const handleCatsDisplay = (event) => {
    event.preventDefault();
    setCatsDisplay(!catsDisplay);
  };

  const handleSharksDisplay = (event) => {
    event.preventDefault();
    setSharksDisplay(!sharksDisplay);
  };

  const fetchImages = () => {
    const urlParam = catsDisplay && sharksDisplay? 'images': (catsDisplay? 'cats': 'sharks');
    setImagesState({
      ...imagesState,
      isFetching: true
    })
    fetch(`http://localhost:3000/api/${urlParam}`)
      .then(response => response.json())
      .then(data => {
        setImagesState({
          images: data,
          isFetching: false
        })
      })
      .catch(error => {
        console.log(error);
        setImagesState({
          ...images,
          isFetching: false
        })
      });
  }

  const initImagesState = () => {
    setImagesState({
      images: null,
      isFetching: false
    });
  }

  return (
    <div>
      <div className='buttonsGroup'>
        <button onClick={handleCatsDisplay}>Cats</button>
        <button onClick={handleSharksDisplay}>Sharks</button>
      </div>

      <div className='images-container'>
        <ImagesStateContext.Provider value={imagesState}>
          <ImagesContainer />
        </ImagesStateContext.Provider>
      </div>
    </div>
  );
}

export default Homepage;
