import logo from './logo.svg';
import './App.css';
import Fetchh from './Fetchh';
import { Route,Routes } from 'react-router-dom';
import Cities from './Cities';

function App() {
  return (
    
 <Routes> 
  <Route path ='/' element={<Fetchh/>}/>
  <Route path='/:countryN' element={<Cities/>}/> 
 </Routes>
 
  );
}

export default App;
