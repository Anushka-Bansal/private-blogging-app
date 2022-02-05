import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
const Login = React.lazy(() => import("./components/login/Login"));
const Signup = React.lazy(() => import("./components/signup/Signup"));
const Home = React.lazy(() => import("./components/home/Home"));
const CreateBlog = React.lazy(() =>
    import("./components/createBlog/CreateBlog")
);

function App() {
    return (
        <div className="App">
            <Suspense
                fallback={
                    <div>
                        <img src="./images/lazy-loading.gif" alt="Loading..." />
                    </div>
                }
            >
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/create-blog" element={<CreateBlog />} />
                    </Routes>
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
