import "./App.scss";
import { Routes, Route } from "react-router-dom";

import AdminRouter from "./Pages/Admin/Router";
import SiteRouter from "./Pages/Site/Router";
import NavBar from "./Components/NavBar";

import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="App ps-0 pe-0">
      <NavBar />
      <Container className="pt-3 pb-5">
        <Routes>
          <Route path="admin/*" element={<AdminRouter />} />
          <Route path="/*" element={<SiteRouter />} />
        </Routes>
      </Container>
      <footer className="p-3">ITJ - Fullstack Bootcamp</footer>
    </Container>
  );
}

export default App;
