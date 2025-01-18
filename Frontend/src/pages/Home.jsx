import React from 'react';
import { TokenRequest } from '../AxiosCreate';

function Home() {
  function apicheck() {
    TokenRequest.post('/user/check')
      .then((response) => {
        console.log('API Response:', response.data);
        alert('Token is valid!');
      })
      .catch((error) => {
        console.error('API Error:', error.response?.data || error.message);
        alert('Token is not valid!');
      });
  }

  return (
    <div>
      <button onClick={apicheck}>Check User Authentication</button>
    </div>
  );
}

export default Home;
