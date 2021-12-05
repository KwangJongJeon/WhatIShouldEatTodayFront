const DistanceSelector = ({range, onChangeInput}) => {

  const minDistance = "500";
  const maxDistance = "5000";
  console.log("distance: " + range)

  const onChange = e => {
    onChangeInput(e.target.value);
  }

  return(
    <div className={'range'}>


      <input
        type={"range"}
        min={minDistance}
        max={maxDistance}
        defaultValue={1000}
        onChange={onChange}
      />
    </div>
  )
}

export default DistanceSelector;