import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Video from './components/Video';
import Footer from './components/Footer';
import Upload from './components/Upload';
import Singup from './components/Singup';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Header />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Singup" element={<Singup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
