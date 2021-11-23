import CategoryItem from './CategoryItem';

const Categories = ({
  input,
  categories,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {

  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  }
  const onChange = e => onChangeInput(e.target.value);

  return (
    <div>
      {categories.text? categories : categories[0].text}
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange}/>
        <button type={'submit'}>등록</button>
      </form>
      <div className={'category'}>
        {categories.map(category => (
          <CategoryItem
            category={category}
            key={category.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories;