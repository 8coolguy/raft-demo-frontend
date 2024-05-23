import { HashRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import  NavBar from "./Components/Navbar";
import  Home from "./Components/Editor";
import './App.css';

function App() {
  const files = [
    {
      name:"file 1",
      timestamp:2,
      content:"sldflsdkfjlsjflksdjf\n"
    },
    {
      name:"file 2",
      timestamp:3,
      content:"sldflsdkfjlsjflksdjf\nfsljdflkdsjflksd\ndsjflkdsfjlsdkjflsdf\ndsfljsdlfkjdskf\nksdjflksdjflksdf\nlsdkjflskdjf\nfsdkjflsdjfldskjfsd"
    },
    {
      name:"file 3",
      timestamp:5,
      content:"slfsdfsdfsdfsdfdsfsdfsdfsddflsdkfjlsjflksdjf\nfsljdflkdsjflksd\ndsjflkdsfjlsdkjflsdf\ndsfljsdlfkjdskf\nksdjflksdjflksdf\nlsdkjflskdjf\nfsdkjflsdjfldskjfsddslfksjdlfjk\n"
    }
  ]
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home directory={files} />} />
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
