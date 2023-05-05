# Router Plasma App

```bash
npx degit teamxynlab/plasma/templates/router my-plasma-app
```

![Router Plasma App](/assets/router.png)

## ⚡️ Project Structure

Inside of this Plasma project, you'll see the following folders and files:

```
/
├── backend/
│   └── pocketbase-linux
|   └── pocketbase-macos
|   └── pocketbase-macosarm
|   └── pocketbase-windows.exe
├── src/
|   ├── assets/
|   |   └── favicon.svg
│   ├── components/
│   │   └── card.tsx
│   ├── routes/
│   │   └── home.tsx
│   ├── App.tsx
|   ├── index.css
|   └── index.tsx
├── utils/
|   └── pocketbase.ts
├── index.html
└── package.json
```

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
