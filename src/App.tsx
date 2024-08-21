import Navbar from "./components/navbar";
import Home from "./components/Home"
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route,
} from "react-router-dom";

const App: React.FC = () => {

  return (
   <div className="app bg-midnightgreen text-white">
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/> }/>
    </Routes>
    <Footer />
    </Router>
    </div>
  )
}

export default App
