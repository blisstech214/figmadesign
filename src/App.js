import "./App.css";
import SectionA from "./component/page/home/SectionA";
import SectionB from "./component/page/home/SectionB";
import SectionC from "./component/page/home/SectionC";
import SectionE from "./component/page/home/SectionE";
import Navbar from "./component/main/Navbar";
import Footer from "./component/main/Footer";
import SectionMain from "./component/page/home/SectionMain";
import PageTwo from "./component/page/home/PageTwo";
// import One from "./component/page/home/One";
import Login from "./component/page/home/Login";
import Inbox from "./component/page/home/Inbox";
import Outbox from "./component/page/home/Outbox";
function App() {
  return (
    <>
      <Navbar />
      <Login />

      <SectionA />

      <SectionB />

      <SectionC />

      <SectionE />
      <SectionMain />

      <PageTwo />

      <Inbox />
      <Outbox />
      <Footer />
    </>
  );
}

export default App;
