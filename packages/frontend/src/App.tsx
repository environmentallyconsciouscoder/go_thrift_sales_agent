import { Routes, Route } from "react-router-dom";
import './App.css'
import Questionaire from "./pages/questionaire";
import Dashboard from "./pages/dashboard";
import './index.css';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Questionaire />}/>
          <Route path="dashboard" element={<Dashboard />}/>
        </Routes>
    </>
  )
}

export default App