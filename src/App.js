import { HashRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import  NavBar from "./Components/Navbar";
import  Home from "./Components/Editor";
import { useState, useEffect } from "react";
import './App.css';

const nodes =[
  "http://localhost:8081/files/",
  "http://localhost:8082/files/"
]
function App() {
  
  const files = [
    {
      id:0,
      name:"Tutorial",
      timestamp:3,
      content:"Welcome to the Revision System with distrubuted consesus. When you click fetch, you can retrieve files from the server which are be distrubuted to many nodes.\n1. The + sign will create a new file which you can give it a name.\n2. The commit makes a new commit and updates the content of the files amongst all the nodes.\n3.Fetch retrives all the files."
    },
  ]
  const [directory,setDirectory] = useState(files);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home directory={directory} setDirectory={setDirectory} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}


export default App;
