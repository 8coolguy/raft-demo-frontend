import { HashRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import  NavBar from "./Components/Navbar";
import  Home from "./Components/Editor";
import { useState } from "react";
import './App.css';

function App() {
  const files = [
    {
      id:0,
      name:"file 1",
      timestamp:3,
      content:"sldflsdkfjlsjflksdjf\n"
    },
    {
      id:1,
      name:"file 2",
      timestamp:3,
      content:"sldflsdkfjlsjflksdjf\nfsljdflkdsjflksd\ndsjflkdsfjlsdkjflsdf\ndsfljsdlfkjdskf\nksdjflksdjflksdf\nlsdkjflskdjf\nfsdkjflsdjfldskjfsd"
    },
    {
      id:2,
      name:"file 3",
      timestamp:5,
      content:"slfsdfsdfsdfsdfdsfsdfsdfsddflsdkfjlsjflksdjf\nfsljdflkdsjflksd\ndsjflkdsfjlsdkjflsdf\ndsfljsdlfkjdskf\nksdjflksdjflksdf\nlsdkjflskdjf\nfsdkjflsdjfldskjfsddslfksjdlfjk\n"
    }
  ]
  const [directory,setDirectory] = useState(files);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home directory={directory} setDirectory={setDirectory} />} />
          <Route path="status" element={<Status />}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}
function Status(){
  return (<div>Hello Status</div>)
}

export default App;
