import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar/NavBar";
import Footer from "./pages/Footer/Footer";

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
