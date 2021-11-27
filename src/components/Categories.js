import CategoryItem from './CategoryItem';

const Categories = ({
  categories,
}) => {


  return (
    <div>
      {categories.text? categories : categories[0].text}
      <div className={'category'}>
        {categories.map(category => (
          <CategoryItem
            category={category}
            key={category.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories;