import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  )
}

export default App
