import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
// import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
const Login = React.lazy(() => import("./components/login/Login"));

function App() {
    return (
        <div className="App">
            <Suspense
                fallback={
                    <div>
                        <img src="./images/loading.gif" alt="Loading..." />
                    </div>
                }
            >
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
