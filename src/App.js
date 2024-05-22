import { HashRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="status" element={<Status />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
function Layout(){
  return (<>  <Link to="/">Home</Link> <Link to="/status">Status</Link> <Outlet/> </>)
}
function Home(){
  return (<div>Hello Home</div>)
}
function Status(){
  return (<div>Hello Status</div>)
}

export default App;
