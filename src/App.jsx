import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import Projects from "./Pages/Projects";
import Blogs from "./Pages/Blogs";
import ScrollToTop from "./Pages/useScrollToTop";


function App() {
  
  return (
   
    <Router>
       <ScrollToTop/>
    <Header />
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  </Router>
  
  )
}

export default App;
