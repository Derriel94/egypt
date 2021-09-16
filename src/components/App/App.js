import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import History from '../History/History';
import ArticleList from '../ArticleList/ArticleList';
import Gallery from '../Gallery/Gallery';
import Trivia from '../Trivia/Trivia';



const App = () => {
    return (
      <BrowserRouter >
        <div className="App">
        <div className="header">
          <NavLink to="/ "><h2>EGYPT</h2></NavLink>
          <h2>Everything Egyption</h2>
          <NavLink to="/register">Register/Login</NavLink>
        </div>
          <Navbar />
          <div className="Page-Content">
          <Switch>
            <Route path="/ " component={Home} exact/>
            <Route path="/history" component={History} exact/> 
            <Route path="/articles" component={ArticleList} exact/>
            <Route path="/gallery" component={Gallery} exact/>
            <Route path="/trivia" component={Trivia} exact/>
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
}

export default App;
