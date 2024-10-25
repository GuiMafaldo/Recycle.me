import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyles } from './global';

import HeaderComponent from './components/Layout/Header';
import HomeComponent from "./pages/Home";
import InitialPageComponent from "./components/InitialPage";
import RegisterComponent from "./pages/Register";
import CentralComponent from "./pages/CentralApp";
import FooterComponent from "./components/Layout/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<InitialPageComponent />} />
          <Route path="/login" element={<HomeComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/central" element={<CentralComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
