const API = "http://localhost:5001/api/tasks";


async function loadTasks() {
  const res = await fetch(API);
  const tasks = await res.json();
  document.getElementById("taskList").innerHTML =
    tasks.map(t => `
      <li>
        <b>${t.title}</b> - ${t.status}
        <button onclick="deleteTask('${t._id}')">❌</button>
      </li>
    `).join("");
}

document.getElementById("taskForm").addEventListener("submit", async e => {
  e.preventDefault();
  const task = {
    title: title.value,
    description: description.value,
    status: status.value
  };
  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
  e.target.reset();
  loadTasks();
});

async function deleteTask(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  loadTasks();
}

loadTasks();
