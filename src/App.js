import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import {
  Home,
  About,
  TrustGraph,
  TrustProfile,
  Faq,
  SignUp,
  WhyUs,
} from "./pages";

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <About />
      <WhyUs />

      <TrustProfile />
      <TrustGraph />
      <Faq />
      <Footer />

      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="#" element={<Home />} />
          <Route path="#about" element={<About />} />
          <Route path="#trust-profile" element={<TrustProfile />} />
          <Route path="#trust-graph" element={<TrustGraph />} />
          <Route path="#faq" element={<Faq />} />
          <Route path="#signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
