import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navhead from './components/Navhead'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navhead />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
