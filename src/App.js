import './index.css';
import UserDataSubmitFormContainer from './containers/UserDataSubmitFormContainer';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import RecommendationResult from './pages/RecommendationResult';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<UserDataSubmitFormContainer/>} path={'/'}/>
        <Route element={<RecommendationResult/>} path={'/recommendationResult/:id'}/>
        <Route element={<LoginPage/>} path="/login" />
        <Route element={<RegisterPage/>} path="/register" />
      </Routes>
    </>
  );
}
export default App;
