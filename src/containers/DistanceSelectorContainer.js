import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import DistanceSelector from '../components/DistanceSelector';
import { changeInput } from '../modules/distanceSelector';

const DistanceSelectorContainer = () => {
  const distance = (state => state.distanceSelector.distance);
  console.log("in container: " + distance);

  const dispatch = useDispatch();
  const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
  console.log("distance: "+ distance);

  return (
    <DistanceSelector
      distance={distance}
      onChangeInput={onChangeInput}
    />
  )
};

export default DistanceSelectorContainer;