import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Video from './components/Video';
import Footer from './components/Footer';
import Upload from './components/upload';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
