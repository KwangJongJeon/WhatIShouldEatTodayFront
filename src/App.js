import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import RecommendationResultPage from './pages/RecommendationResultPage';
import UserDataSubmitPage from './pages/UserDataSubmitPage';
import HomePage from './pages/HomePage';
import Footer from './components/page/Footer';
import ContactPage from './pages/ContactPage';
import HeaderContainer from './containers/HeaderContainer';
import UserMyPagePage from './pages/UserMyPagePage';

const App = () => {
  if(process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
  }
  return (
    <div className={'container'}>
      <HeaderContainer/>
      <Routes>
        <Route element={<HomePage/>} path={'/'}/>
        <Route element={<UserDataSubmitPage/>} path={'/recommendation'}/>
        <Route element={<RecommendationResultPage/>} path={'/recommendationResult'}/>
        <Route element={<ContactPage/>} path={'/contact'}/>
        <Route element={<LoginPage/>} path="/login" />
        <Route element={<RegisterPage/>} path='/register' />
        <Route element={<UserMyPagePage/>} path={'/userMyPage'} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
