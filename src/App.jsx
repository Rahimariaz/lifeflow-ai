import { BrowserRouter, Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Analysis from "./pages/Analysis"
import Planner from "./pages/Planner"
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/analysis" element={<Analysis />} />

        <Route path="/planner" element={<Planner />} />

        <Route path="/login" element={<Login />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App