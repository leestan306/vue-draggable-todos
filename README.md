# Vue 3 Todo Application

[Todo App Preview ](https://leestan306.github.io/vue-draggable-todos)

This is a Todo application created with Vue 3, TypeScript, and the Composition API. The application uses Tailwind CSS and DaisyUI for styling, and Vite for building and development. It also includes Vite PWA for Progressive Web App support.

## Features

- **Add Todos:** Create new todos with a name and category.
- **Drag and Drop:** Drag todos to different states: complete, delete, or add to progress.
- **Dynamic Styling:** Utilizes Tailwind CSS and DaisyUI for responsive and modern styling.
- **Progressive Web App:** Supports PWA features using Vite PWA plugin.

## Project Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://leestan306.github.io/vue-draggable-todos
   ```

2. Navigate to the project directory:

   ```bash
   cd vue-draggable-todos
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

This will start the Vite development server, and you can access the application at `http://localhost:5173`.

### Build

To build the project for production:

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Serve

To serve the built files:

```bash
npm run preview
```

### PWA Support

To enable PWA features, make sure to run the build command and serve the files using a web server. Vite PWA will handle service worker registration and caching.

## Project Structure

```
src/
├── assets/
│   └── logo.png
├── section/
│   ├── DeleteDrop.vue
│   ├── DropArea.vue
│   └── FilteredTodos.vue
├── App.vue
├── NewTodo.vue
├── TodoCard.vue
├── main.ts
├── types.d.ts
└── ...
```

### Components

- **NewTodo.vue:** Form to create new todos.
- **TodoCard.vue:** Displays individual todo items with drag and drop functionality.
- **TodoList.vue:** Lists all todos and categorizes them based on their state (active, completed, in progress).

### Styling

The project uses Tailwind CSS and DaisyUI for styling. Tailwind CSS is a utility-first CSS framework, and DaisyUI provides pre-designed components.

### Scripts

- **Add Todo:** Handles the creation of new todos.
- **Drag and Drop:** Manages the drag and drop events to change the state of todos.
- **Watchers:** Listens for changes in the todos array and updates the UI accordingly.

## Acknowledgements

This project was created as a learning exercise while taking a Vue 3 course. Building this project helped in understanding the Composition API, TypeScript with Vue, and modern frontend development practices.
