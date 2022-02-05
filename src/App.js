import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Blog from './pages/blog'
import Post from './pages/blog/[slug]-[id]'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='blog' element={<Blog />} />
        <Route path={`blog/:slug-:id`} element={<Post />} />
        <Route exact path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
