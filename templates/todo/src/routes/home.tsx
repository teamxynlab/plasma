import { Component, For, createSignal, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { pb } from "../../utils/pocketbase";

interface TodoProps {
    id?: string;
    index: number;
    content: string;
    isDone: boolean;
}

const Home: Component = () => {
    const [newTodo, setNewTodo] = createSignal("");

    const [todos, setTodos] = createStore<TodoProps[]>([]);

    onMount(async () => {
        let records = await pb.collection("todos").getFullList({
            sort: "created",
        });

        const data = [
            {
                index: 0,
                content: "Try Plasma out",
                isDone: true,
            },
            {
                index: 1,
                content: "Add more TODOs",
                isDone: false,
            },
            {
                index: 2,
                content: "Experiment with the Plasma TODO app",
                isDone: false,
            },
        ];

        if (records.length === 0) {
            for (let i = 0; i < data.length; i++) {
                await pb.collection("todos").create(data[i]);
            }
        }

        records = await pb.collection("todos").getFullList({
            sort: "created",
        });

        for (let i = 0; i < records.length; i++) {
            setTodos([
                ...todos,
                {
                    id: records[i].id,
                    index: records[i].index,
                    content: records[i].content,
                    isDone: records[i].isDone,
                },
            ]);
        }
    });

    const createTodo = async () => {
        const data = {
            index: todos.length,
            content: newTodo(),
            isDone: false,
        };

        setTodos([...todos, data]);

        await pb.collection("todos").create(data);

        setNewTodo("");
    };

    const updateTodoContent = async (e, id, index) => {
        setTodos(
            (todo) => todo.index === index,
            "content",
            e.currentTarget.value
        );

        await pb.collection("todos").update(id, {
            content: e.currentTarget.value,
        });
    };

    const updateTodoIsDone = async (id, index) => {
        setTodos(
            (todo) => todo.index === index,
            "isDone",
            (isDone) => !isDone
        );

        await pb.collection("todos").update(id, {
            isDone: todos[index].isDone,
        });
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
                            onChange={(e) => updateTodoContent(e, todo.id, i())}
                            class="flex-1 outline-none bg-gray-100 p-4 rounded-s-lg"
                        />
                        <button
                            onClick={() => updateTodoIsDone(todo.id, i())}
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
