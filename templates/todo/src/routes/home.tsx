import { Component } from "solid-js";
import { pb } from "../../utils/pocketbase";

const Home: Component = () => {
    return (
        <main class="flex items-center justify-center flex-col gap-y-4">
            <h1 class="text-4xl font-bold">
                My TODOs
            </h1>
        </main>
    );
};

export default Home;
