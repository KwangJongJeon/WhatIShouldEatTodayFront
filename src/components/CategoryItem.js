const CategoryItem = ({category, onToggle, onRemove}) => {
  return (
    <div>
      <input
        type={"checkbox"}
        id={category.id}
        onClick={() => onToggle(category.id)}
        checked={category.selected}
        readOnly={true}
      />
      selected: {category.selected? "true " : "false "}
      <span style={{textDecoration: category.selected? 'line-through' : 'none'}}>{category.text}</span>
    </div>
  )
}

export default CategoryItem;