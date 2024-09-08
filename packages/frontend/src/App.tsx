import { Routes, Route } from "react-router-dom";
import FashionConsultantForm from "./pages/FashionConsultantForm";
import Dashboard from "./pages/Dashboard";
import './App.css'
import './index.css';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<FashionConsultantForm />}/>
          <Route path="dashboard" element={<Dashboard />}/>
        </Routes>
    </>
  )
}

export default App