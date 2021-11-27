import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, remove, toggle } from '../modules/userDataSubmitForm';
import Categories from '../components/Categories';
import { useCallback } from 'react';

const CategoriesContainer = () => {

  const { input, categories } = useSelector(({categories}) => ({
    input: categories.input,
    categories: categories.categories
  }));

  const dispatch = useDispatch();
  const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
  const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

  // const [onChangeInput, onInsert, onToggle, onRemove] =
  //   useActions([changeInput, insert, toggle, remove], []);

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