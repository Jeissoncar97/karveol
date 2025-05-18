import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './components/BlogPost.jsx';
import Plans from './pages/Plans.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Catalog from './pages/Catalog.jsx';
import NotFound from './pages/NotFound.jsx';
import LogIn from './pages/LogIn.jsx';
import Register from './pages/Register.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Profile from './pages/pages-user/Profile.jsx';
import Header from './components/Header.jsx';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:slug" element={<BlogPost />} />
				<Route path="/plans" element={<Plans />} />
				<Route path="/Catalog" element={<Catalog />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/log-in" element={<LogIn />} />
				<Route path="/sign-up" element={<Register />} />
				<Route
					path="/terminos-y-condiciones"
					element={<TermsAndConditions />}
				/>
				<Route path="/politicas" element={<PrivacyPolicy />} />
				<Route path="/perfil" element={<Profile />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
