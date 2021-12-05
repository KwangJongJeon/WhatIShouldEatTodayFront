const CategoryItem = ({category, onToggle}) => {
  return (
    <div className={'form-check form-check-inline pb-5'}>
      <input
        className={'form-check-input'}
        type={"checkbox"}
        id={category.id}
        onClick={() => onToggle(category.id)}
        checked={category.selected}
        readOnly={true}
      />
      <label className={'form-check-label'} htmlFor={category.id}>{category.text}</label>
    </div>
  )
}

export default CategoryItem;