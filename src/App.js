
import {Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Register from './Components/Register';
import HomePage from './HomePage';

const App = () => {
 return(
   <Routes>
     <Route path='/' element={<HomePage />} />
     <Route path='/register' element={<Register />} />
     <Route path='/login' element={<Login />} />
     <Route path='/profile' element={<Profile />} />
   </Routes>
 )
};

export default App;



