import DistanceSelector from './DistanceSelector';
import Categories from './Categories';

const UserDataSubmitForm = ({
  categories, // 카테고리가 들어있는 객체
  inputDistance, // 거리가 들어있는 객체
  onChangeInput,
  onToggle,
  onTransfer,
}) => {

  const onSubmit = e => {
    e.preventDefault();
    onTransfer(inputDistance);
    onChangeInput();
  }

  const onChange = e => onChangeInput(e.target.value);

  return (
    <div className={"UserSubmitForm"}>
      <form className={"submitForm"} onSubmit={onSubmit}>
        <DistanceSelector
          onChange={onChange}
        />
        <Categories
          categories={["1", "2"]}
          onToggle={onToggle}
        />
      </form>
    </div>
  )
}

export default UserDataSubmitForm;