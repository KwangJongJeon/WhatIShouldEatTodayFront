const DistanceSelector = ({range, onChangeInput}) => {

  const minDistance = "100";
  const maxDistance = "2000";
  console.log("distance: " + range)

  const onChange = e => {
    onChangeInput(e.target.value);
  }

  return(
    <div className={'range pb-5 pt-5'}>


      <label htmlFor={'range'} className={'form-label'}>탐색 범위: {range}m</label>
      <input
        id={'range'}
        className={'form-range'}
        type={'range'}
        min={minDistance}
        max={maxDistance}
        step={100}
        defaultValue={500}
        onChange={onChange}
      />
    </div>
  )
}

export default DistanceSelector;