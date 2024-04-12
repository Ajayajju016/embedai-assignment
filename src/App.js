import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Home from './components/Home'
import ChatPage from './components/ChatPage'
import CreateCharacterPage from './components/CreateCharacterPage'

import './App.css'

const App = () => (
  <Router>
    <div className="app">
      <Sidebar />
      <div className="content">
        <Route path="/" exact component={Home} />
        <Route exact path="/chat/:id" component={ChatPage} />
        <Route exact path="/create-character" component={CreateCharacterPage} />
      </div>
    </div>
  </Router>
)

export default App
