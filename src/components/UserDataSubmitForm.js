import Categories from './Categories';
import DistanceSelector from './DistanceSelector';
import Button from './common/Button';

const UserDataSubmitForm = ({
  categories,
  range,
  onToggle, onChangeRange,
  onSubmit,
}) => {




  return (
    <div className={"UserSubmitForm"}>
      {/*{onSubmit}*/}
      <form className={"submitForm"} onSubmit={onSubmit} >
        <DistanceSelector range={range} onChangeInput={onChangeRange}/>
        <Categories categories={categories} onToggle={onToggle}/>
        <Button >식사 추천</Button>
      </form>
    </div>
  )
}

export default UserDataSubmitForm;