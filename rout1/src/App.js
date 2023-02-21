import logo from './logo.svg';
import './App.css';
import { Route,Routes, useNavigate} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact'
import About from './About'
import Products from './Products'
import Shirts from './Shirts'
import Jeans from './Jeans'
import Navbar from './Navbar';
function App() {
  const navigate=useNavigate();
  const navigateto=(url)=>{
    navigate(url);
  }
  return (
    <>
    <Navbar/>
<Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/a' element={<About/>} />
        <Route path='/p' element={<Products/>}>
        <Route path='shirts' element={<Shirts/>}/>
        <Route path='jeans' element={<Jeans/>}/>
        </Route>
        <Route path='./c' element={<Contact/>}/>
     </Routes> 
      <button onClick={()=>navigateto('/c')}> click here to navigate</button>
      <button onClick={()=>navigateto('/a')}> click here to about</button>
      <>Go back </>
      </>
      
  );
}

export default App;