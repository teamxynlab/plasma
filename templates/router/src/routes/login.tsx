import { Component, createSignal, onMount } from "solid-js";
import { A } from "@solidjs/router";
import { pb } from "../../utils/pocketbase";

const Login: Component = () => {
    const [username, setUsername] = createSignal("");
    const [password, setPassword] = createSignal("");
    const [error, setError] = createSignal("");

    onMount(() => {
        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (savedUsername) setUsername(savedUsername);
        if (savedPassword) setPassword(savedPassword);
    });

    const handleLogin = async () => {
        let isSuccess = false;

        let records = await pb.collection("users").getFullList({
            sort: "created",
        });

        for (const user of records) {
            if (user.username === username() && user.password === password()) {
                localStorage.removeItem("username");
                localStorage.removeItem("password");

                isSuccess = true;

                window.location.href = `/user/${user.id}`;

                break;
            }
        }

        if (!isSuccess)
            setError("Invalid login credentials... Please try again!");
    };

    return (
        <main class="flex items-center justify-center flex-col gap-y-4 w-[80vw] py-10">
            <div class="w-full text-left">
                <A
                    href="/users"
                    class="text-indigo-500 hover:text-indigo-700 transition-colors"
                >
                    &larr; <span class="underline">Find Users</span>
                </A>
            </div>
            <h1 class="text-4xl font-bold mb-4">Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username()}
                onChange={(e) => setUsername(e.currentTarget.value)}
                class="w-full p-4 bg-gray-100 rounded-lg outline-none"
            />
            <input
                type="text"
                placeholder="Password"
                value={password()}
                onChange={(e) => setPassword(e.currentTarget.value)}
                class="w-full p-4 bg-gray-100 rounded-lg outline-none"
            />
            <button
                onClick={() => handleLogin()}
                class="w-[100px] mt-4 py-2 px-4 bg-gray-100 rounded-lg transition-colors hover:bg-gray-200"
            >
                Log In
            </button>
            <p class="text-red-500">{error()}</p>
        </main>
    );
};

export default Login;
