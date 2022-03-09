import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import Home from "./pages/home"
import Search from "./pages/search";
import Header from './common/header'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchKey" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
