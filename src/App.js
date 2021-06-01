import React from 'react';
import './App.css'
import Nav from './Nav';
import Calculator from './components/Calculator';
import Quotes from './Quotes';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Route path="/" component={Home} />
                <Route path="/calculator" component={Calculator} />
                <Route path="/Quotes" component={Quotes} />
            </div>
        </Router>        
    )
}

export default App