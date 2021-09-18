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
      <BrowserRouter>
        <div className="App">
        <div className="header">
          <NavLink to="/"><h2>EGYPT</h2></NavLink>
          <h2>Everything Egyptian</h2>
          <NavLink to="/register">Register/Login</NavLink>
 
          </div>
          <div className="Page-Content">
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/history" component={History} /> 
            <Route path="/articles" component={ArticleList} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/trivia" component={Trivia} />
          </Switch>
          </div>

        <h1>  </h1>

        </div>
      </BrowserRouter>
    );
}

export default App;
