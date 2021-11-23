const UserDataSubmitForm = ({
  category, // 카테고리가 들어있는 객체
  inputDistance, // 거리가 들어있는 객체
  onInsertCategory,
  onRemoveCategory,
  onChangeInput,
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
      <form onSubmit={onSubmit}>
        <input
          type={"range"}
          id={"distance"}
          value={inputDistance}
          name={"distance"}
          min={"0"}
          max={5000}
          defaultValue={1000}
          list={"tickmarks"}
        />
        <datalist id={"tickmarks"}>

        </datalist>
      </form>
    </div>
  )
}

export default UserDataSubmitForm;