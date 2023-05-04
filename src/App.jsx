/* eslint-disable no-unused-vars */
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar/NavBar";
import Footer from "./pages/Footer/Footer";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
