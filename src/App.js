import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route exact path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
