import { useEffect, useState } from 'react';

export const usePosition = () => {
  const [ position, setPosition ] = useState({});
  const [ err, setErr ] = useState(null);

  const onSuccess = ({coords}) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  const onError = (err) => {
    setErr(err.message);
  }

  useEffect(() => {
    const geo = navigator.geolocation;
    if(!geo) {
      setErr('Geolocation is not supported')
      return;
    }

    let watcher = geo.watchPosition(onSuccess, onError);

    return () => geo.clearWatch(watcher);
  }, []);

  return {...position, err};
}