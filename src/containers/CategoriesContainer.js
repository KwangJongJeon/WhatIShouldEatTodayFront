import { useSelector } from 'react-redux';
import { useActions } from '../lib/useActions';
import { changeInput, insert, remove, toggle } from '../modules/categories';
import Categories from '../components/Categories';

const CategoriesContainer = () => {
  const { input, categories } = useSelector(({input}) => ({
    input: categories.input,
    categories: categories.categories
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] =
    useActions([changeInput, insert, toggle, remove], []);

  return (
    <Categories
      input={input}
      categories={categories}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  )
}

export default CategoriesContainer;