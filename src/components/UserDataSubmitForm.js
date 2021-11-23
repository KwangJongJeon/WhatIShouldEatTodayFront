import DistanceSelector from './DistanceSelector';
import CategoriesContainer from '../containers/CategoriesContainer';

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

  const onChange = e => {
    e.preventDefault()
    onChangeInput(e.target.value);
  }

  return (
    <div className={"UserSubmitForm"}>
      <form className={"submitForm"} onSubmit={onSubmit}>
        <DistanceSelector
          onChange={onChange}
        />
        <CategoriesContainer />
      </form>
    </div>
  )
}

export default UserDataSubmitForm;