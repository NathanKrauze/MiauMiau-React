import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ManagePage from "./pages/ManagePage/ManagePage";
import HomePage from "./pages/HomePage/HomePage";
import AddCatPage from "./pages/AddCatPage/AddCatPage";
import CatPage from "./pages/CatPage/CatPage";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignInPage/>}/>
          <Route path="/sign-up" element={<SignUpPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/" element={<CatPage/>}/>
          <Route path="/Manage" element={<ManagePage/>}/>
          <Route path="/Add" element={<AddCatPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


