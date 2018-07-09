import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar/Navbar';
import { Switch, Route } from "react-router-dom";
import BarChart from './components/bar-chart/BarChart'
import Home from './components/home/home';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CssBaseline />
                <header>
                    <Navbar/>
                </header>
                <section>
                    <Switch>                        
                        <Route path="/home" component={Home} />
                        <Route path="/bar-chart" component={BarChart} />
                    </Switch>
                </section>
            </div>
        );
    }
}

export default App;
