import "./App.css";
import Navbar from "./components/Navbar";
import Router from "./Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Router />
    </>
  );
}

export default App;
