import { Component, createSignal, onMount } from "solid-js";
import { A, useParams } from "@solidjs/router";
import { pb } from "../../utils/pocketbase";

const User: Component = () => {
    const { id } = useParams();
    const [username, setUsername] = createSignal("");

    onMount(async () => {
        const user = await pb.collection("users").getOne(id);
        setUsername(user.username);
    });

    return (
        <main class="flex items-center justify-center flex-col gap-y-4 w-[80vw] py-10">
            <p>
                Hello, World! I'm <span class="font-bold">{username()}</span>
            </p>
            <A
                href="/"
                class="text-indigo-500 hover:text-indigo-700 transition-colors"
            >
                &larr; <span class="underline">Home</span>
            </A>
        </main>
    );
};

export default User;
