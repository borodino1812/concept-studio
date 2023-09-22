import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Showcase from "./pages/Showcase";
import TicketPage from "./pages/TicketPage";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/ticket:id" element={<TicketPage editMode={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
