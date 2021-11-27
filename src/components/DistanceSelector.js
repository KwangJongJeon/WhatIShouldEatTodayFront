const DistanceSelector = ({distance, onChangeInput}) => {

  const minDistance = "500";
  const maxDistance = "5000";
  console.log("distance: " + distance)

  const onChange = e => {
    onChangeInput(e.target.value);
  }

  return(

    <div className={'distance'}>

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