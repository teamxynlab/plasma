import { Component, For, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { pb } from "../../utils/pocketbase";

interface TodoProps {
    id: number;
    content: string;
    isDone: boolean;
}

const Home: Component = () => {
    const [newTodo, setNewTodo] = createSignal("");

    const [todos, setTodos] = createStore<TodoProps[]>([
        {
            id: 0,
            content: "Try Plasma out",
            isDone: true,
        },
        {
            id: 1,
            content: "Add more TODOs",
            isDone: false,
        },
        {
            id: 2,
            content: "Experiment with the Plasma TODO app",
            isDone: false,
        },
    ]);

    const createTodo = () => {
        setTodos([
            ...todos,
            {
                id: todos.length,
                content: newTodo(),
                isDone: false,
            },
        ]);

        setNewTodo("");
    };

    return (
        <main class="flex items-center justify-center flex-col gap-y-4 w-9/12 py-10">
            <h1 class="text-4xl font-bold mb-4">My TODOs</h1>
            <For each={todos}>
                {(todo, i) => (
                    <div class="flex items-center justify-between w-full bg-gray-100 p-4 rounded-lg gap-x-4">
                        <p class="flex-1">{todo.content}</p>
                        <input
                            type="checkbox"
                            checked={todo.isDone}
                            onChange={() =>
                                setTodos(
                                    (todo) => todo.id === i(),
                                    "isDone",
                                    (isDone) => !isDone
                                )
                            }
                            class="w-4 h-4 border-gray-300 rounded-lg cursor-pointer"
                        />
                    </div>
                )}
            </For>
            <div class="flex items-center justify-between w-full gap-x-4 bg-gray-100 rounded-lg">
                <input
                    placeholder="New TODO..."
                    value={newTodo()}
                    onChange={(e) => setNewTodo(e.currentTarget.value)}
                    class="flex-1 outline-none bg-gray-100 pl-4"
                />
                <button
                    onClick={() => createTodo()}
                    class="p-4 hover:text-indigo-500 transition-colors font-bold"
                >
                    + Add
                </button>
            </div>
        </main>
    );
};

export default Home;
