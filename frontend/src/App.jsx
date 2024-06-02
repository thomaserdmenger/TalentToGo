import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmployerPage from "./pages/EmployerPage";
import EmployeesPage from "./pages/EmployeesPage";
import { languageContext } from "./Context/Context";
import { useState } from "react";
import Imprint from "./pages/Imprint";

const App = () => {
  const [language, setLanguage] = useState("DE");

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/employer" element={<EmployerPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/imprint" element={<Imprint />} />
          {/* <Route path="*" element={<p>There's nothing here: 404!</p>} /> Für alle No Match Routes */}
        </Routes>
      </BrowserRouter>
    </languageContext.Provider>
  );
};

export default App;
