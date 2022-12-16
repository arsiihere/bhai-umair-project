import { NavBar } from "./components";
import CurrentRun from "./pages/CurrentRun";
import { SideBar, Wrapper } from "./components";
import Algorithm from "./pages/Algorithm";
import Alarams from "./pages/Alarams";
// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <NavBar />
      {/* <CurrentRun /> */}

      <div className="flex">
        <SideBar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<CurrentRun />} />
            <Route path="/algorithm" element={<Algorithm />} />
            <Route path="/alarams" element={<Alarams />} />
          </Routes>
        </Wrapper>
      </div>
      {/* <CurrentRun /> */}
    </>
  );
}

export default App;
