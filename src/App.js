import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Footer from './views/Footer';
import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
