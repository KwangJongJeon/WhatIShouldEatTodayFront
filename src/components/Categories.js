import CategoryItem from './CategoryItem';

const Categories = ({
  categories,
  onToggle
}) => {


  return (
    <div>
      <div className={'category'}>
        <h6> 카테고리 선택</h6>
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