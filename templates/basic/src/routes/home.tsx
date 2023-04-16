import { Component } from "solid-js";
import Card from "../components/card";
import { pb } from "../../utils/pocketbase";

const Home: Component = () => {
    return (
        <main class="flex items-center justify-center flex-col gap-y-4">
            <h1 class="text-4xl font-bold">
                Welcome to <span class="text-indigo-500">Plasma</span>
            </h1>
            <p>
                Seamlessly build your next amazing app with the{" "}
                <b>tech stack of the future</b>
            </p>

            <div class="w-full px-4 py-6 rounded-lg text-white text-center text-lg bg-gradient-to-r from-indigo-500 to-purple-500">
                Edit{" "}
                <code class="bg-white rounded-md text-black px-2 py-1 font-sans">
                    src/routes/home.tsx
                </code>{" "}
                to get started!
            </div>

            <Card
                url="https://teamxynlab.github.io/plasma/"
                title="Read the Docs"
                desc="Understand the structure of a Plasma app and its underlying technologies - Solid (+ Solid Router), Tailwind CSS, and PocketBase."
            />

            <Card
                url="https://github.com/teamxynlab/plasma#-templates"
                title="Clone a Template App"
                desc="Play around with template apps built with Plasma while browsing through the code responsible for making it all happen."
            />

            <Card
                url="https://github.com/teamxynlab/plasma"
                title="Contribute on GitHub"
                desc="Implement new ideas and fix existing bugs to improve this open-source project."
            />
        </main>
    );
};

export default Home;
