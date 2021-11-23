import CategoryItem from './CategoryItem';

const Categories = ({
  categories,
  onToggle
}) => {

  return (
    <div>
      {categories.map(category => (
        <CategoryItem
          category={category}
          key={category.id}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

export default Categories;