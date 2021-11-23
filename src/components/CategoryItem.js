const CategoryItem = (category, onToggle) => {
  return (
    <div>
      <input
        type={"checkbox"}
        checked={category.selected}
        onClick={() => onToggle(category.id)}
        readOnly={true}
      />
      <label htmlFor={category.id}>{category.name}</label>
    </div>
  )
}

export default CategoryItem;