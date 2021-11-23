import CategoriesContainer from '../containers/CategoriesContainer';
import DistanceSelectorContainer from '../containers/DistanceSelectorContainer';

const UserDataSubmitForm = ({
  onTransfer,
}) => {

  const onSubmit = e => {
    onTransfer();
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