const CategoryItem = ({category, onToggle}) => {
  return (
    <div>
      <input
        type={"checkbox"}
        id={category.id}
        onClick={() => onToggle(category.id)}
        checked={category.selected}
        readOnly={true}
      />
      <span>{category.text}</span>
    </div>
  )
}

export default CategoryItem;