import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Plans from './pages/Plans.jsx'
import ScrollToTop from './components/ScrollToTop.jsx';


function App() {

  return (
    
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<h1></h1>} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/plans" element={<Plans/>} />
        
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
