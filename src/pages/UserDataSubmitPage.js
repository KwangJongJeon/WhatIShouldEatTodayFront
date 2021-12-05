import Button from '../components/common/Button';
import UserDataSubmitFormContainer from '../containers/UserDataSubmitFormContainer';

const UserDataSubmitPage = () => {
  return (
    <div className={'container'}>
      <UserDataSubmitFormContainer/>
      <button type={'button'} className={'btn btn-primary'}>Primary</button>
    </div>
  )
}

export default UserDataSubmitPage;