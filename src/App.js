import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navhead from './components/Navhead'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Footer from './components/Footer'
import Tvid from './Pages/Tvid'

function App() {
  return (
    <>
      <Navhead />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Search" element={<Search />} />
        <Route path="tvshow/:tvid" element={<Tvid />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
