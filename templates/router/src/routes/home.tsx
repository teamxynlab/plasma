import { Component } from "solid-js";
import Card from "../components/card";

const Home: Component = () => {
    return (
        <main class="flex items-center justify-center flex-col gap-y-4 w-[80vw]">
            <h1 class="text-4xl font-bold">Plasma Router</h1>
            <p>Navigate between routes in your Plasma project</p>

            <div class="w-full px-4 py-6 rounded-lg text-white text-center text-lg bg-gradient-to-r from-indigo-500 to-purple-500">
                Edit{" "}
                <code class="bg-white rounded-md text-black px-2 py-1 font-sans">
                    src/App.tsx
                </code>{" "}
                and the files in{" "}
                <code class="bg-white rounded-md text-black px-2 py-1 font-sans">
                    src/routes/
                </code>{" "}
                to get started!
            </div>

            <div class="grid grid-cols-2 w-full gap-x-4 h-[200px]">
                <Card
                    url="/users"
                    title="Find Users"
                    desc="Navigate to /users to find all the users you can log in as in this site."
                />

                <Card
                    url="/login"
                    title="Login"
                    desc="Try to log in as one of the users listed in /users."
                />
            </div>
        </main>
    );
};

export default Home;
