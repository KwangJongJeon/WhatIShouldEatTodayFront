import Categories from './Categories';
import DistanceSelector from './DistanceSelector';
import Button from './common/Button';
import KakaoMap from './KakaoMap';

const UserDataSubmitForm = ({
  categories,
  range, latitude, longitude,
  onToggle, onChangeRange,
  onSubmit,
}) => {


  return (
    <div className={"container justify-content-center"}>
      <form className={"container"} onSubmit={onSubmit} >
        <DistanceSelector range={range} onChangeInput={onChangeRange}/>
        <Categories categories={categories} onToggle={onToggle}/>
        <KakaoMap latitude={latitude} longitude={longitude} range={range}/>
        <div className={'container align-items-center justify-content-end'}>
        <Button>식사 추천</Button>
        </div>
      </form>
    </div>
  )
}

export default UserDataSubmitForm;