import Navbar from "./components/Navbar";
import About from "./Screens/About";
import Home from "./Screens/Home";
import Skill from "./Screens/Skill";

function App() {
  return (
    <div className="App w-full min-h-screen">
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
    </div>
  );
}

export default App;
