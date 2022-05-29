import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import AllBeers from './pages/AllBeers';
import SingleBeer from './components/SingleBeer';
import Beer from './pages/Beer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beers" element={<AllBeers/>} />
        <Route path="/beers/:id" element={<Beer/>} />
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
