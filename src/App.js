import React from 'react';
import Nav from './Nav';
import Calculator from './components/Calculator';
import Quotes from './Quotes';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Route path="/calculator" component={Calculator} />
                <Route path="/Quotes" component={Quotes} />
            </div>
        </Router>        
    )
}

export default App