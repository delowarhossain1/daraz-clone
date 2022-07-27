import "./App.css";
import "./utility/utility.css";
import Navbar from "./components/shared/Navbar/Navbar";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <section className="primary-bg">
        <div className="w-[95%] mx-auto">
          <Home />
        </div>
      </section>
    </>
  );
}

export default App;
