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
                    <div class="flex items-center justify-between w-full">
                        <input
                            placeholder={`TODO #${i() + 1}`}
                            value={todo.content}
                            onChange={(e) =>
                                setTodos(
                                    (todo) => todo.id === i(),
                                    "content",
                                    () => e.currentTarget.value
                                )
                            }
                            class="flex-1 outline-none bg-gray-100 p-4 rounded-s-lg"
                        />
                        <button
                            onClick={() =>
                                setTodos(
                                    (todo) => todo.id === i(),
                                    "isDone",
                                    (isDone) => !isDone
                                )
                            }
                            class={
                                todo.isDone
                                    ? "transition-colors bg-green-200 hover:bg-green-300 p-4 rounded-e-lg w-[120px]"
                                    : "transition-colors bg-blue-200 hover:bg-blue-300 p-4 rounded-e-lg w-[120px]"
                            }
                        >
                            {todo.isDone ? "Completed" : "Complete"}
                        </button>
                    </div>
                )}
            </For>
            <div class="flex items-center justify-between w-full">
                <input
                    placeholder="New TODO..."
                    value={newTodo()}
                    onChange={(e) => setNewTodo(e.currentTarget.value)}
                    class="flex-1 outline-none bg-gray-100 p-4 rounded-s-lg"
                />
                <button
                    onClick={() => createTodo()}
                    class="transition-colors bg-indigo-200 hover:bg-indigo-300 p-4 rounded-e-lg w-[120px]"
                >
                    + Add
                </button>
            </div>
        </main>
    );
};

export default Home;
