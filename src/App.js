import "./App.css";
import SectionA from "./component/page/home/SectionA";
import SectionB from "./component/page/home/SectionB";
import SectionC from "./component/page/home/SectionC";
import SectionE from "./component/page/home/SectionE";
import Navbar from "./component/main/Navbar";
import Footer from "./component/main/Footer";
import SectionMain from "./component/page/home/SectionMain";
import PageTwo from "./component/page/home/PageTwo";
import One from "./component/page/home/One";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section id="section-main">
          <SectionMain />
        </section>
        <section id="section-a">
          <SectionA />
        </section>
        <section id="section-b">
          <SectionB />
        </section>
        <section id="section-c">
          <SectionC />
        </section>
        <section id="section-e">
          <SectionE />
        </section>
        <section id="section-page-two">
          <PageTwo />
        </section>
        <section id="section-one">
          <One />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
