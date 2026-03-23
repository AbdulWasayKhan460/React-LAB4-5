import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SingleBlog from './SingleBlog'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<SingleBlog />} />
    </Routes>
  )
}

export default App