import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { categoryToggle, changeDistance } from '../modules/userDataSubmitForm';
import UserDataSubmitForm from '../components/UserDataSubmitForm';

const UserDataSubmitFormContainer = () => {

  const [ latitudeInput, setLatitudeInput ] = useState('');
  const [ longitudeInput, setLongitudeInput ] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitudeInput(position.coords.latitude.toString());
        setLongitudeInput(position.coords.longitude.toString());
      },
      (err) => {
        console.error("Error code: " + err.code + "-" + err.message);
      }
    )
  })

  const {distance, categories} = useSelector(({userDataSubmitForm}) => ({
    distance: userDataSubmitForm.distance,
    categories: userDataSubmitForm.categories,
    coordinate: {
      latitude: latitudeInput,
      longitude: longitudeInput
    }
  }));

  const dispatch = useDispatch();
  const onToggle = useCallback(id => dispatch(categoryToggle(id)), [dispatch]);
  const onChangeDistance = useCallback(distance => dispatch(changeDistance(distance)), [dispatch]);

  return (
    <UserDataSubmitForm
      distance={distance}
      categories={categories}
      onToggle={onToggle}
      onChangeDistance={onChangeDistance}
    />
  )
}

export default UserDataSubmitFormContainer;