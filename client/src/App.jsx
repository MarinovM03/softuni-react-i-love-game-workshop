import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
    return (
        <>
            <Header />

            <Home />

            <Footer />
        </>
    );
}

export default App