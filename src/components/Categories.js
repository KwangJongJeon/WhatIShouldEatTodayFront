import CategoryItem from './CategoryItem';

const Categories = ({
  categories,
  onToggle
}) => {


  return (
    <div>
      {categories.text? categories : categories[0].text}
      <div className={'category'}>
        {categories.map(category => (
          <CategoryItem
            category={category}
            onToggle={onToggle}
            key={category.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories;