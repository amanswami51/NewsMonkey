import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    progress:0
  }
  setprogress = (progress)=>{
    this.setState({
      progress : progress
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color='#f11946' progress={this.state.progress} />
          <Routes>
            <Route path="/" element={<News setprogress={this.setprogress}  key="general" pageSize={6} category="general" />} />
            <Route path="/business" element={<News setprogress={this.setprogress}  key="business" pageSize={6} category="business" />} />
            <Route path="/entertainment" element={<News setprogress={this.setprogress}  key="entertainment" pageSize={6} category="entertainment" />} />
            <Route path="/general" element={<News setprogress={this.setprogress}  key="general" pageSize={6} category="general" />} />
            <Route path="/health" element={<News setprogress={this.setprogress}  key="health" pageSize={6} category="health" />} />
            <Route path="/science" element={<News setprogress={this.setprogress}  key="science" pageSize={6} category="science" />} />
            <Route path="/sports" element={<News setprogress={this.setprogress}  key="sports" pageSize={6} category="sports" />} />
            <Route path="/technology" element={<News setprogress={this.setprogress}  ey="technology" pageSize={6} category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
 