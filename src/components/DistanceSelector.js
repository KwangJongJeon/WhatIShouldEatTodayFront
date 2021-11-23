const DistanceSelector = (onChange) => {

  const minDistance = "500";
  const maxDistance = "5000";


  return(
    <div className={'distance'}>
      <input
        type={"range"}
        min={minDistance}
        max={maxDistance}
        defaultValue={1000}
        onChange={() => {onChange()}}
      />
    </div>
  )
}

export default DistanceSelector;