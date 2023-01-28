import { useState } from "react";
import Encryptor from "./components/Encryptor";
import Header from "./components/Header";
import emojis from "./emojis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Decryptor from "./components/Decryptor";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {<Route exact path="/" element={<Encryptor />} />}
          <Route exact path="/encrypt" element={<Encryptor />} />
          <Route exact path="/decrypt" element={<Decryptor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
