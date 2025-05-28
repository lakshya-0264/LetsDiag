import { Routes, Route } from "react-router-dom";
import LetsDiag from "./components/LetsDiag";
import Diagnosis from "./components/Diagnosis";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LetsDiag />} />
      <Route path="/diagnosis" element={<Diagnosis />} />
    </Routes>
  );
}

export default App;
