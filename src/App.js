import UserDataSubmitFormContainer from './containers/UserDataSubmitFormContainer';
import { Route, Router, Routes, Switch } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import UserDataSubmitPage from './pages/UserDataSubmitPage';
import test from './test';
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
