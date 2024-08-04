import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import MainPage from './pages/MainPage/MainPage';
import './index.css'; 
import './css/index.scss'; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<AuthPage />}></Route>
        <Route path={'/main'} element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
