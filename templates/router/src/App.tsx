import { Component } from "solid-js";
import { lazy } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";

const Home = lazy(() => import("./routes/home"));
const Users = lazy(() => import("./routes/users"));
const User = lazy(() => import("./routes/user"));
const Login = lazy(() => import("./routes/login"));

const App: Component = () => {
    return (
        <div class=" w-screen min-h-screen flex items-center justify-center flex-col">
            <Routes>
                <Route path="/" component={Home} />
                <Route path="/users" component={Users} />
                <Route path="/user/:id" component={User} />
                <Route path="/login" component={Login} />

                <Route
                    path="/*"
                    element={
                        <p>
                            Oops! This page doesn't exist.{" "}
                            <A
                                href="/"
                                class="p-0 m-0 underline transition-colors hover:text-indigo-500"
                            >
                                Back to home
                            </A>
                            .
                        </p>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
