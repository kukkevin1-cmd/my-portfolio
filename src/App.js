import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* /projects/:slug renders the home page with that project's modal open,
            so every project has a shareable URL. */}
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
