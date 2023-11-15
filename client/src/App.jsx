import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import Navbar from "./components/Navbar";
import { userContext } from "./UserContext";
import Search from "./pages/Search/Search";
import CreateListing from "./pages/CreateListing/CreateListing";
import Profile from "./pages/Profile/Profile";
import ListingPage from "./pages/Listing/ListingPage";
import { FadeLoader } from "react-spinners";
import { useContext } from "react";

function App() {
  const { ready } = useContext(userContext);
  return (
    <>
      <Navbar />
      {!ready && <FadeLoader color="#2963a3" className="mx-auto mt-48" />}
      {ready && (
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/listings" element={<Search />}></Route>
          <Route path="/create-listing" element={<CreateListing />}></Route>
          <Route path="/listings/:id" element={<ListingPage />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
