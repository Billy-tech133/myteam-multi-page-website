import Navbar from "./components/navbar";
import Home from "./components/home"
import Footer from "./components/footer";
import About from "./components/about";
import { BrowserRouter as Router, Routes, Route,
} from "react-router-dom";

const App: React.FC = () => {

  return (
   <div className="app bg-midnightgreen text-white">
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
    </Router>
    </div>
  )
}

export default App
