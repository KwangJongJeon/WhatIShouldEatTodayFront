import Categories from './Categories';
import DistanceSelector from './DistanceSelector';

const UserDataSubmitForm = ({
  categories,
  distance,
  onToggle,
  onChangeDistance,
  onSubmit,
}) => {




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