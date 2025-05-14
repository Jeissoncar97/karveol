import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Main />
      <Routes>
        <Route path="/" element={<h1></h1>} />
        <Route path="/about" element={<h1></h1>} />
        <Route path="/contact" element={<h1></h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
