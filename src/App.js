import React from 'react';
import './App.css'
import Nav from './Nav';
import CalculatorPage from './CalculatorPage';
import Quotes from './Quotes';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/CalculatorPage" component={CalculatorPage} />
                    <Route path="/Quotes" component={Quotes} />
                </Switch>
            </div>
        </Router>        
    )
}

export default App