import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import History from '../History/History';
import ArticleList from '../ArticleList/ArticleList';

const App = () => {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Welcome To Everything Egyption</h1>
          <Navbar />
          <div className="Page-Content">
          <Switch>
            <Route path="/" component={Home} exact /> 
            <Route path="/history" component={History} /> 
            <Route path="/articles" component={ArticleList} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
}

export default App;
