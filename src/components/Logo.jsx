import React from 'react';
import logoHeader from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg';

const Logo = ({ isWhite = false }) => {
  return (
    <img 
      src={isWhite ? logoFooter : logoHeader} 
      alt="Logo Digital Store" 
      width="253" 
      height="44" 
    />
  );
};

export default Logo;
