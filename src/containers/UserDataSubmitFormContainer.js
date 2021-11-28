import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { categoryToggle, changeDistance, getCoordinate } from '../modules/userDataSubmitForm';
import UserDataSubmitForm from '../components/UserDataSubmitForm';
import { usePosition } from '../lib/usePosition';

const UserDataSubmitFormContainer = () => {

  const {latitude, longitude} = usePosition();

  const {distance, categories, coordinate} = useSelector(({userDataSubmitForm}) => ({
    distance: userDataSubmitForm.distance,
    categories: userDataSubmitForm.categories,
    coordinate: {
      latitude: latitude,
      longitude: longitude
    }
  }));

  const dispatch = useDispatch();
  const onToggle = useCallback(id => dispatch(categoryToggle(id)), [dispatch]);
  const onChangeDistance = useCallback(distance => dispatch(changeDistance(distance)), [dispatch]);
  const onGetCoordinate = useCallback((latitude, longitude) => dispatch(getCoordinate(latitude, longitude)), [dispatch]);

  return (
    <UserDataSubmitForm
      distance={distance}
      coordinate={coordinate}
      categories={categories}
      onToggle={onToggle}
      onChangeDistance={onChangeDistance}
      onGetCoordinate={onGetCoordinate}
    />
  )
}

export default UserDataSubmitFormContainer;