import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import './index.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import Profile from './Pages/User/Profile';
import UrlShortener from './Pages/URL/UrlShortener';


function App() {
  return (
    <BrowserRouter>
        <HeaderMegaMenu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path= "url/shortener" element={<UrlShortener/>} />
            <Route element={<PrivateRoute/>}>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
