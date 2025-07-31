import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './card'// Make sure the path is correct

function Countries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://xcountries-backend.azurewebsites.net/all')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ display: 'flex',gap:"10px", flexWrap: 'wrap' }}>
      {data.map((country, index) => (
        <Card key={index} img={country.flag} name={country.name} alt={`flag is ${country.abbr}`} />
      ))}
    </div>
  );
}

export default Countries;