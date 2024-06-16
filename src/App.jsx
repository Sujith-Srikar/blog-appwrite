import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import appwriteService from "./appwrite/config";
import { login, logout } from "./store/authSlice";
import { Footer, Header, Container } from "./components";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(false);
      }
    });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          {/* {posts && (navigate("/home"))} */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;