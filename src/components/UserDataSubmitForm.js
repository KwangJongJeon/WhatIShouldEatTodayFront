import CategoriesContainer from '../containers/CategoriesContainer';
import DistanceSelectorContainer from '../containers/DistanceSelectorContainer';

const UserDataSubmitForm = ({
  inputDistance, // 거리가 들어있는 객체
  onChangeInput,
  onTransfer,
}) => {

  const onSubmit = e => {
    e.preventDefault();
    onTransfer(inputDistance);
    onChangeInput();
  }


  return (
    <div className={"UserSubmitForm"}>
      <form className={"submitForm"} onSubmit={onSubmit}>
        <DistanceSelectorContainer
        />
        <CategoriesContainer />
      </form>
    </div>
  )
}

export default UserDataSubmitForm;