import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Accordian from './components/Accordian';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Newcomp from './components/Newcomp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Register from './components/Register';
import NewCaradd from './components/NewCaradd';
import Carsview from './components/Carsview';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Navbar/>} />
    <Route path='/login' element={<SignIn/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/car/:id' element={<Gallery/>} />
    <Route path='/add' element={<NewCaradd/>} />
    <Route path='/View' element={<Carsview/>} />

    </Routes>
    
    </BrowserRouter>
     
   
    </div>
  );
}

export default App;
