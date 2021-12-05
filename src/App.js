import './index.css';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import RecommendationResult from './pages/RecommendationResult';
import UserDataSubmitPage from './pages/UserDataSubmitPage';
import Header from './components/page/Header';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className={'container'}>
      <Header/>
      <Routes>
        <Route element={<HomePage/>} path={'/'}/>
        <Route element={<UserDataSubmitPage/>} path={'/recommendation'}/>
        <Route element={<RecommendationResult/>} path={'/recommendationResult/:id'}/>
        <Route element={<LoginPage/>} path="/login" />
        <Route element={<RegisterPage/>} path="/register" />
      </Routes>
    </div>
  );
}
export default App;
