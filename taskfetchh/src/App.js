import logo from './logo.svg';
import './App.css';
import Fetchh from './Fetchh';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    
 <> <Routes> 
  <Route path ='/' element={<Fetchh/>}/>
 </Routes>
 </>
  );
}

export default App;
