import { Routes, Route } from "react-router-dom";
import Login from "./component/page/home/Login"; // Login component
// import Sidebar from "./component/main/Sideba"; // Sidebar component
import Navbar from "./component/main/Navbar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
