import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
