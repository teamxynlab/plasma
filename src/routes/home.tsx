import { Component } from "solid-js";
import Card from "../components/card";
import { pb } from "../../utils/pocketbase";

const Home: Component = () => {
    return (
        <main class="flex items-center justify-center flex-col gap-y-4">
            <h1 class="text-4xl text-indigo-500 font-bold">
                Welcome to Plasma!
            </h1>
            <p>
                Seamlessly build your next amazing app with the{" "}
                <b>tech stack of the future</b>
            </p>

            {/* TODO: Link to docs.md on GitHub */}
            <Card
                url=""
                title="Read the Docs"
                desc="Understand the structure of a Plasma app and its underlying technologies - Solid, Solid Router, Tailwind CSS, and PocketBase."
            />

            {/* TODO: Link to example app folder on GitHub */}
            <Card
                url=""
                title="Clone a TODO App"
                desc="Play around with an example TODO app built with Plasma while browsing through the code responsible for making it all happen."
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
