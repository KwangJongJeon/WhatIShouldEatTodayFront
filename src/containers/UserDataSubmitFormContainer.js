import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
  categoryToggle,
  changeRange,
  getLocationAsync, recommendation,
} from '../modules/userDataSubmitForm';
import UserDataSubmitForm from '../components/UserDataSubmitForm';
import { usePosition } from '../lib/usePosition';
import { useNavigate } from 'react-router-dom';

const UserDataSubmitFormContainer = () => {

  const {latitude, longitude} = usePosition()
  const navigate = useNavigate();

  const {range, categories, coordinate} = useSelector(({userDataSubmitForm}) => ({
    range: userDataSubmitForm.range,
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
  const onChangeRange = useCallback(distance => dispatch(changeRange(distance)), [dispatch]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(recommendation({
      range: range,
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
      categories: categories
    }));
    // navigate('./recommendationResult');
  }

  return (
    <UserDataSubmitForm
      range={range}
      coordinate={coordinate}
      categories={categories}
      onToggle={onToggle}
      onChangeRange={onChangeRange}
      onSubmit={onSubmit}
    />
  )
}

export default UserDataSubmitFormContainer;