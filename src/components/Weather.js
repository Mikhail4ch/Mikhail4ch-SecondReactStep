import React, { useEffect, useState } from 'react';
import mockAPI from '../api/mockapi';

const Weather = () => {
  const [temperature, setTemperature] = useState('');

  useEffect(() => {
    mockAPI.get('https://api.openweathermap.org/data/2.5/weather?q=Stavanger&appid=487bd2b7ddd4e28e7439b5e014ce104e')
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