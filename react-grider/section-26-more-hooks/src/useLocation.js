import { useState, useEffect } from 'react';

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  // The convention is to return properties from hooks methods in the form of an array
  return [lat, errorMessage];
};

export default useLocation;