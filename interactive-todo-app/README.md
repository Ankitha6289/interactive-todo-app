# ✅ Interactive To-Do Application

A dynamic and responsive To-Do List web application built using **HTML5, CSS3, and JavaScript**.

This project demonstrates core frontend development concepts including DOM manipulation, state management, localStorage persistence, filtering logic, and accessibility best practices.

---

## 🚀 Live Demo

👉 (Add your GitHub Pages link here after deployment)

---

## 📌 Project Overview

This Interactive To-Do Application allows users to:

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as complete/incomplete
- Filter tasks (All / Active / Completed)
- Persist data using localStorage
- Clear completed tasks
- Use keyboard accessibility features

The application is fully responsive and designed with a clean, modern UI.

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Browser localStorage API

---

## 🎯 Core Features

### ✔ Add Tasks
Users can add new tasks using the input field and press **Enter** or click **Add**.

### ✔ Edit Tasks
Double-click a task (or press Enter when focused) to edit it.

### ✔ Delete Tasks
Remove tasks individually using the Delete button.

### ✔ Mark Complete
Toggle task completion using the checkbox.

### ✔ Filter Tasks
Filter tasks by:
- All
- Active
- Completed

### ✔ Persistent Storage
Tasks are saved in the browser's `localStorage`, so they remain after page refresh.

### ✔ Clear Completed
Remove all completed tasks at once.

### ✔ Keyboard Accessibility
- Enter key adds tasks
- Enter key confirms edits
- Focus support for task items

---

## 🧠 Project Structure


interactive-todo-app/
│
├── index.html
├── style.css
└── script.js


---

## 📂 How to Run Locally

1. Download or clone the repository:

git clone https://github.com/your-username/interactive-todo-app.git


2. Open the project folder.

3. Open `index.html` in your browser.

No additional dependencies required.

---

## 💾 Data Structure

Each task is stored as an object:

```javascript
{
id: Number,
text: String,
completed: Boolean
}

Tasks are stored in localStorage as:

localStorage.setItem("tasks", JSON.stringify(tasks))
📸 Screenshots

(Add screenshots here)

Example:

![App Screenshot](screenshot.png)