import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header/Header";
import { Home, About, TrustGraph, TrustProfile, Faq, SignUp } from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trust-profile" element={<TrustProfile />} />
          <Route path="/trust-graph" element={<TrustGraph />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
