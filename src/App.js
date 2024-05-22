import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="status" element={<Status />} />
        </Route>
      </Routes>
    </BrowserRouter>
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
