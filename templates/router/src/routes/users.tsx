import { Component, For, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { A } from "@solidjs/router";
import { pb } from "../../utils/pocketbase";

interface IUser {
    username: string;
    password: string;
}

const Users: Component = () => {
    const [users, setUsers] = createStore<IUser[]>([]);

    onMount(async () => {
        let records = await pb.collection("users").getFullList({
            sort: "created",
        });

        const data = [
            {
                username: "lorem",
                password: "12345678",
            },
            {
                username: "ipsum",
                password: "qwerty111",
            },
            {
                username: "sit",
                password: "asdf101",
            },
            {
                username: "dolor",
                password: "qazplm06",
            },
            {
                username: "amet",
                password: "plasma3",
            },
        ];

        if (records.length === 0) {
            for (let i = 0; i < data.length; i++) {
                await pb.collection("users").create(data[i]);
            }
        }

        records = await pb.collection("users").getFullList({
            sort: "created",
        });

        for (let i = 0; i < records.length; i++) {
            setUsers([
                ...users,
                {
                    username: records[i].username,
                    password: records[i].password,
                },
            ]);
        }
    });

    const handleSaveDetails = (username: string, password: string) => {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        window.location.href = "/login";
    };

    return (
        <main class="flex items-center justify-center flex-col gap-y-4 w-[80vw] py-10">
            <div class="w-full text-left">
                <A
                    href="/"
                    class="text-indigo-500 hover:text-indigo-700 transition-colors"
                >
                    &larr; <span class="underline">Home</span>
                </A>
            </div>
            <For each={users}>
                {(user, i) => (
                    <div class="w-full flex items-start justify-center flex-col p-4 bg-gray-100 rounded-lg gap-y-2">
                        <h3 class="m-0 font-bold text-base">User #{i() + 1}</h3>
                        <p class="m-0">Username: {user.username}</p>
                        <p class="m-0">Password: {user.password}</p>
                        <div class="w-full text-right">
                            <button
                                onClick={() =>
                                    handleSaveDetails(
                                        user.username,
                                        user.password
                                    )
                                }
                                class="font-bold text-indigo-500 hover:text-indigo-700 transition-colors"
                            >
                                Log in as {user.username} &rarr;
                            </button>
                        </div>
                    </div>
                )}
            </For>
        </main>
    );
};

export default Users;
