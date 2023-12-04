import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [temperature, setTemperature] = useState('');

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Stavanger&appid=YOUR_API_KEY')
      .then(response => {
        const kelvinTemperature = response.data.main.temp;
        const celsiusTemperature = kelvinTemperature - 273.15;
        setTemperature(celsiusTemperature.toFixed(2));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Temperature in Stavanger today:</h2>
      <p> {temperature} &#8451;</p>
    </div>
  );
};

export default Weather;