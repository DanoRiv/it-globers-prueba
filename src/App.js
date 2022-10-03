import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Footer from './views/Footer';
import './App.css'
import CallToAction from './views/CallToAction';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
