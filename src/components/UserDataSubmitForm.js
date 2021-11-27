import Categories from './Categories';
import DistanceSelector from './DistanceSelector';

const UserDataSubmitForm = ({
  categories,
  distance,
  onToggle,
  onChangeDistance
}) => {

  return (
    <div className={"UserSubmitForm"}>
      <form className={"submitForm"}>
        <DistanceSelector distance={distance} onChangeInput={onChangeDistance}/>
        <Categories categories={categories} onToggle={onToggle}/>
      </form>
    </div>
  )
}

export default UserDataSubmitForm;