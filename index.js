import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router } from "react-router-dom";
//import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//import Header from  '../build/components/headerC';
//import Footer from '../build/components/footerC';
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();



ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );