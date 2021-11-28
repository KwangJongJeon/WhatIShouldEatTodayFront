import Categories from './Categories';
import DistanceSelector from './DistanceSelector';
import { usePosition } from '../lib/usePosition';

const UserDataSubmitForm = ({
  categories,
  distance,
  onGetCoordinate,
  onToggle,
  onChangeDistance,

}) => {

  const { latitude, longitude } = usePosition();

  const onSubmit = e => {
    e.preventDefault()
    onGetCoordinate(latitude, longitude);
  }

  return (
    <div className={"UserSubmitForm"}>
      {/*{onSubmit}*/}
      <form className={"submitForm"} >
        <DistanceSelector distance={distance} onChangeInput={onChangeDistance}/>
        <Categories categories={categories} onToggle={onToggle}/>
        <a href={"/result"} role={"button"} onSubmit={onSubmit}>식사 추천</a>
      </form>
    </div>
  )
}

export default UserDataSubmitForm;