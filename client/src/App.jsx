import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home  from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
