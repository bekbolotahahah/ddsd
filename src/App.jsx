import { Route, Routes } from "react-router-dom";
import "./App.css";
import HOME from "./pages/HOME";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HOME />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
}

export default App;
