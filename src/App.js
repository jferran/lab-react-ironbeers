import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import AllBeers from './pages/AllBeers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beers" element={<AllBeers/>} />
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
