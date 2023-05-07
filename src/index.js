// index.js
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';
import About from './About';
import Search from "./Search";
import Navigation from "./Navigation";
function App() {
    return (
        <Router>
            <Navigation/>
                <Routes>
                    <Route path="/recipes" element={<Recipes/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));