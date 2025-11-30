# 🎮 I Love Game - ReactJS Workshop

Hi! 👋 This is the **"I Love Game"** project I am building as part of the **ReactJS Workshop** at **SoftUni**.

It is a Single Page Application (SPA) where users can browse, create, and manage a catalog of video games. The goal of this workshop is to practice component separation and client-side routing.

## 🧐 What it does (So far)

Currently, the app handles the following features:

* **Component Separation:** I've split major views (Home, Login, Register, Catalog, etc.) into reusable components.
* **Routing:** Using `react-router` to manage navigation between the Home, Catalog, and Details pages without refreshing the browser.
* **Home Page:** Displays a welcome message and the 3 most recently added games.
* **Catalog:** A list of all games. If no games exist yet, it displays a specific "No articles" view.
* **Details View:** Clicking a game shows its specific details (genre, summary, etc.).
* **Delete:** Functionality to delete a game and redirect back to the home page.

## 🚧 What I'm working on next

We are continuing to work on this in the course. The next updates will include:

* **Authentication:** Implementing Login and Register forms using session tokens.
* **Route Guards:** Ensuring only logged-in users can access specific pages (like "Add Game" or "Edit").
* **Owner Logic:** Making sure you can only edit or delete games you actually created.
* **Error Handling:** Improving the user experience by showing validation errors on forms and handling API error responses gracefully.

## 💻 How to Run It

This project uses a provided local backend server. You need to start that first, then the React app.

### 1. Start the Backend
The REST service is located in the `server` folder.

1.  Open your terminal in the `server` folder.
2.  Run this command:
    ```bash
    node server.js
    ```
    *(The terminal will show the host address and port)*.

### 2. Start the React App
1.  Open a new terminal in the main project folder.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the app:
    ```bash
    npm run dev
    ```

## 🔗 API Cheatsheet

The app connects to the local SoftUni practice server using these endpoints:

* **Get All Games:** `GET /jsonstore/games`
* **Get One Game:** `GET /jsonstore/games/:id`
* **Delete Game:** `DELETE /jsonstore/games/:id`

---
*React Course Exercise @ SoftUni*
