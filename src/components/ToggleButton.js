import React from 'react';

import './toggleButton.css';

const ToggleButton = ({handleClick, buttonTitle, buttonActive}) => {
  return (
    <button onClick={handleClick} className={buttonActive? "toggleButton active": "toggleButton"}>
      {buttonTitle}
    </button>
  );
}

export default ToggleButton;