let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filters button");
const taskCount = document.getElementById("taskCount");
const clearCompletedBtn = document.getElementById("clearCompleted");
const emptyState = document.getElementById("emptyState");

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(task => {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
    });

    if (tasks.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }

    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        const leftDiv = document.createElement("div");
        leftDiv.className = "task-left";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTask(task.id));

        const span = document.createElement("span");
        span.textContent = task.text;
        span.tabIndex = 0;

        span.addEventListener("dblclick", () => editTask(task.id, span));
        span.addEventListener("keydown", e => {
            if (e.key === "Enter") editTask(task.id, span);
        });

        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", () => deleteTask(task.id));

        li.appendChild(leftDiv);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });

    updateTaskCount();
}

function addTask(text) {
    tasks.push({
        id: Date.now(),
        text,
        completed: false
    });
    saveTasks();
    renderTasks();
}

function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

function editTask(id, element) {
    const task = tasks.find(t => t.id === id);

    const input = document.createElement("input");
    input.type = "text";
    input.value = task.text;

    input.addEventListener("blur", () => {
        task.text = input.value.trim() || task.text;
        saveTasks();
        renderTasks();
    });

    input.addEventListener("keydown", e => {
        if (e.key === "Enter") input.blur();
    });

    element.replaceWith(input);
    input.focus();
}

function updateTaskCount() {
    const active = tasks.filter(task => !task.completed).length;
    taskCount.textContent = `${active} task${active !== 1 ? "s" : ""} left`;
}

function setFilter(filter) {
    currentFilter = filter;
    filterButtons.forEach(btn =>
        btn.classList.toggle("active", btn.dataset.filter === filter)
    );
    renderTasks();
}

function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    renderTasks();
}

taskForm.addEventListener("submit", e => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (!text) return;
    addTask(text);
    taskInput.value = "";
});

filterButtons.forEach(btn =>
    btn.addEventListener("click", () => setFilter(btn.dataset.filter))
);

clearCompletedBtn.addEventListener("click", clearCompleted);

renderTasks();