import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.href = "/login";
      // window.location.pathname("/login");
    });
  };

  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>

          {!isAuth ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <Link to="/createpost">Create Post</Link>
              <button onClick={signUserOut} className="logout-btn">
                Log Out
              </button>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />}></Route>
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth} />}
          ></Route>
          <Route
            path="/createpost"
            element={<CreatePost isAuth={isAuth} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
