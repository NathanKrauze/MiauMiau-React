import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import SignInPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ManagePage from "./pages/ManagePage/ManagePage";
import HomePage from "./pages/HomePage/HomePage";
import AddCatPage from "./pages/AddCatPage/AddCatPage";
import CatPage from "./pages/CatPage/CatPage";
import AuthContext from "./contexts/AuthContext";
import { useState } from "react";

export default function App() {

  const [token, setToken] = useState("")

  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={{token, setToken}}>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/cat/:catId" element={<CatPage />} />
            <Route path="/manage" element={<ManagePage />} />
            <Route path="/add" element={<AddCatPage />} />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  )
}


