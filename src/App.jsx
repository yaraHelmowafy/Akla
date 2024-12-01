import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react"
import Topbar1 from "./components/Topbar1/Topbar1"
import './app.css'
import Menu from "./components/Menu/Menu"
import Intro from './components/Intro/Intro';
import Souces from './components/Souces/Souces';
import Fish from './components/Fish/Fish';
import VF from './components/VF/VF';
import Meat from './components/Meat/Meat';
import Contact from './components/Contact/Contact';
// import HomeAcademy from './components/hirewellAcademy/hirewellAcademy/HomeAcademy'

function App() {
  const [menuOpen,setMenuOpen]= useState(false)
  const [barOpen,setBarOpen]= useState(false)
  return (
    <div className="app">
      <Router>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} barOpen={barOpen} setBarOpen={setBarOpen}/>
     
      <Routes>
  <Route path="/" element={<Intro />} />  {/* Correct */}
</Routes>
<Routes>
  <Route path="/" element={<Meat />} />  {/* Correct */}
</Routes>
<Routes>
  <Route path="/" element={<Souces />} />  {/* Correct */}
</Routes>
<Routes>
  <Route path="/" element={<Fish />} />  {/* Correct */}
</Routes>

<Routes>
  <Route path="/" element={<VF />} />  {/* Correct */}
</Routes>
<Routes>
  <Route path="/" element={<Contact />} />  {/* Correct */}
</Routes>
    </Router>
    <Topbar1 menuOpen={menuOpen} setMenuOpen={setMenuOpen} barOpen={barOpen} setBarOpen={setBarOpen}/>
   

    </div>
  );
}

export default App;
