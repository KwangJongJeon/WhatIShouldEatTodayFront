import './index.css';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import RecommendationResult from './pages/RecommendationResult';
import UserDataSubmitPage from './pages/UserDataSubmitPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<UserDataSubmitPage/>} path={'/'}/>
        <Route element={<RecommendationResult/>} path={'/recommendationResult/:id'}/>
        <Route element={<LoginPage/>} path="/login" />
        <Route element={<RegisterPage/>} path="/register" />
      </Routes>
    </>
  );
}
export default App;
