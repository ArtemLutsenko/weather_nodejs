import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getWeather = async (city) => {
  //  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error('Token not set, set it "-t [API_KEY]"');
  }
  const url = new URL('https://api.openweathermap.org/data/2.5/weather');
  url.searchParams.append('lat', '50.450001');
  url.searchParams.append('lon', '30.523333');
  url.searchParams.append('appid', token);
  url.searchParams.append('lang', 'ua');
  url.searchParams.append('units', 'metric');
  https.get(url, (response) => {
    let res = '';
    console.log('data');
    response.on('data', (chunk) => {
      res += chunk;
    });

    response.on('end', () => {
      console.log(res);
    });
  });
};

export { getWeather };
