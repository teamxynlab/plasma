# Plasma Docs

Welcome to Plasma! We're very excited to see you adopting our stack, and I hope you too are excited to be working with the modern and future-ready technologies in Plasma: Solid (+ Solid Router), Tailwind CSS, PocketBase.

## 📝 Getting Started

To start developing a fully customizable Plasma app, run the following command:

```bash
npx degit teamxynlab/plasma/templates/basic my-plasma-app
```

You can find and use more template apps [here](https://github.com/teamxynlab/plasma/tree/main/templates).

## 🚀 Our Underlying Tech

Plasma consists of 3 primary tech:
- [Solid](https://www.solidjs.com/) (+ [Solid Router](https://github.com/solidjs/solid-router)): to build performant reactive web apps
- [Tailwind CSS](https://tailwindcss.com/): to beautifully style your web apps
- [PocketBase](https://pocketbase.io/): to handle storage, authentication, and all things backend

## ⚡️ Project Structure

Here are the important folders and files in your standard Plasma app:

```
/
├── backend/
├── src/
|   ├── assets/
│   ├── components/
│   ├── routes/
│   ├── App.tsx
├── utils/
└── └── pocketbase.ts
```

`/backend` contains the executables to run your PocketBase instance for different operating systems.

`/src/assets` contains your static assets (e.g. images).

`/src/components` contains your custom reusable components for your app (e.g. `card.tsx`).

`/src/routes` contains your pages. By convention, the `/` route is defined in the `home.tsx` file, the `/about` route is defined in the `about.tsx` file, and the `/about/me` route is defined in the `/about/me.tsx` file.

`/src/App.tsx` is where you define the routes of your Plasma app and any layout to be shared across the entire Plasma app.

`/utils/pocketbase.ts` contains the definition of your PocketBase instance.

## 📝 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                                              |
| :--------------------- | :------------------------------------------------------------------ |
| `npm install`          | Installs dependencies                                               |
| `npm run dev`          | Starts local dev server for frontend only                           |
| `npm run dev:linux`    | Starts local dev server (frontend + backend) for Linux users        |
| `npm run dev:macos`    | Starts local dev server (frontend + backend) for macOS x64 users    |
| `npm run dev:macosarm` | Starts local dev server (frontend + backend) for macOS ARM64 users  |
| `npm run dev:windows`  | Starts local dev server (frontend + backend) for Windows users      |
| `npm run build`        | Build your production site to `./dist/`                             |
