import React from 'react';

const Card = ({img,name,alt}) => {
  
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
    padding: '20px',
  };

  const cardStyle = {
    width: '200px',
    height: '200px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // center horizontally
    padding: '10px',
    boxSizing: 'border-box',
    textAlign: 'center',
  };

  const flagStyle = {
    Width: '75px',
    maxHeight: '75px',
    objectFit: 'contain',
    marginBottom: '10px',
  };

  return (
    <div className={containerStyle}>
      <div style={cardStyle}>
      <img src={img}  alt={alt} style={flagStyle}/>
      <h3>{name}</h3>
    </div>
    </div>
  );
};

export default Card;
