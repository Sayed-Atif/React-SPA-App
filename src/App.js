import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {

    return (
        
            <div className="app">
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route  path="/about" element={<About />} />
                    <Route  path="/contact" element={<Contact />} />
                    <Route  path="*" element={<NotFound />} />
                </Routes>
            </div>
    );
}

export default App;