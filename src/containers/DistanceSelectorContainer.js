import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import DistanceSelector from '../components/DistanceSelector';

const DistanceSelectorContainer = () => {
  const distance = (state => state.distanceSelector.distance);

  const dispatch = useDispatch();
  const changeInput = useCallback(() => dispatch(changeInput()), [dispatch]);

  return (
    <DistanceSelector
      distance={distance}
      onChange={changeInput}
    />
  )
};

export default DistanceSelectorContainer;