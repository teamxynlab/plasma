import { A } from "@solidjs/router";
import { Component } from "solid-js";

interface Props {
    url: string;
    title: string;
    desc: string;
}

const Card: Component<Props> = ({ url, title, desc }) => {
    return (
        <A
            href={url}
            target="_blank"
            class="flex items-start justify-center flex-col w-full px-4 py-6 bg-gray-100 rounded-lg transition-colors hover:bg-gray-200"
        >
            <h2 class="text-2xl font-bold text-indigo-500">{title} &rarr;</h2>
            <p>{desc}</p>
        </A>
    );
};

export default Card;
