import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import routesConfig from "./routes/routesConfig";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  // basename={`/portfolio/`}
  return (
    <BrowserRouter basename={`/portfolio/`}>
      <Navbar />
      <Sidebar />
      <Routes>
        {routesConfig.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={component}
          />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
