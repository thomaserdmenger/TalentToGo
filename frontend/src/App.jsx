import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import EmployerPage from "./pages/EmployerPage"
import EmployeesPage from "./pages/EmployeesPage"
import { languageContext } from "./Context/Context"
import { useState } from "react"

const App = () => {
  const [language, setLanguage] = useState("DE")

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employer" element={<EmployerPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
        </Routes>
      </BrowserRouter>
    </languageContext.Provider>
  )
}

export default App
