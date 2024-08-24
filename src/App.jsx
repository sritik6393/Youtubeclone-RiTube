import { useState } from "react";
import Home from "./pages/Home/Home";
import Video from "./pages/Videoplayer/Video";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";


function App() {
  const [sidebar,setSidebar]=useState(true);
  return (

    <>
      <Navbar setSidebar={setSidebar}></Navbar>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}></Home>}>
          {" "}
        </Route>
        <Route
          path="/Video/:categoryId/:videoId"
          element={<Video></Video>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
