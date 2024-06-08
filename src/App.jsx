import { useState } from 'react'
import './App.css'

import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Routes from './router/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Routes/>
    </Router>
  )
}

export default App
