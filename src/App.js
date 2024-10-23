import { Routes, Route } from "react-router-dom";
import Navbar from "./component/main/Navbar";
import Login from "./component/page/home/Login"; // Assuming you have a Login component
import ChilCom from "./component/page/home/ChilCom";
// import DashBoard from "./component/page/home/DashBoard";
// import SectionB from "./component/page/home/SectionB"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Navbar />} />
        <Route Path="/SectionB" element={<ChilCom />} />
      </Routes>
    </div>
  );
}

export default App;
