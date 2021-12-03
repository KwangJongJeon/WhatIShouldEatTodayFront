import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
  categoryToggle,
  changeDistance,
  getLocationAsync,
} from '../modules/userDataSubmitForm';
import UserDataSubmitForm from '../components/UserDataSubmitForm';
import { usePosition } from '../lib/usePosition';
import recommendation from '../modules/recommendation';
import { useNavigate } from 'react-router-dom';

const UserDataSubmitFormContainer = () => {

  const {latitude, longitude} = usePosition()
  const navigate = useNavigate();

  const {distance, categories, coordinate} = useSelector(({userDataSubmitForm}) => ({
    distance: userDataSubmitForm.distance,
    categories: userDataSubmitForm.categories,
    coordinate: {
      latitude: latitude,
      longitude: longitude
    }
  }));

  // 좌표가져오기
  useEffect(() => {
    dispatch(getLocationAsync());
  }, [])


  const dispatch = useDispatch();
  const onToggle = useCallback(id => dispatch(categoryToggle(id)), [dispatch]);
  const onChangeDistance = useCallback(distance => dispatch(changeDistance(distance)), [dispatch]);

  const onSubmit = e => {
    dispatch(recommendation(distance, coordinate.latitude, coordinate.longitude, categories));
    navigate('/recommendationResult');
  }

  return (
    <UserDataSubmitForm
      distance={distance}
      coordinate={coordinate}
      categories={categories}
      onToggle={onToggle}
      onChangeDistance={onChangeDistance}
      onSubmit={onSubmit}
    />
  )
}

export default UserDataSubmitFormContainer;