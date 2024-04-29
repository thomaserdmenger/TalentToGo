import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import EmployerPage from "./pages/EmployerPage"
import EmployeesPage from "./pages/EmployeesPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employer" element={<EmployerPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
