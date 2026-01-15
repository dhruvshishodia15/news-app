import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="business" category="business" />} />
            <Route path="/sports" element={<News key="sports" category="sports" />} />
            <Route path="/health" element={<News key="health" category="health" />} />
            <Route path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
