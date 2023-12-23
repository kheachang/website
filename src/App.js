import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import KikiBookService from "./pages/KikiBookService";
import "./index.css";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";

function AppRoutes() {
  return (
    <>
      <div id="outer">
        <div id="inner">
          <div id="nav_bar">
            <NavBar></NavBar>
          </div>
          <div id="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="kikibookservice" element={<KikiBookService />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <meta charset="UTF-8"></meta>
      <link rel="stylesheet" href="static/source.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto+Mono"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
      />
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
