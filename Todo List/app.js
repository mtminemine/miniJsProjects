const addTodo = document.querySelector(".add");
const todos = document.querySelector(".todos");
const search = document.querySelector(".search input");

const template = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todo}</span>
        <i class="fas fa-trash-alt delete"></i>
    </li>
    `;
  todos.innerHTML += html;
};

addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addTodo.add.value.trim();
  if (todo.length) {
    template(todo);
    addTodo.reset();
  }
});

// delete
todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// keyup
const filterTodos = (term) => {
  Array.from(todos.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));
  Array.from(todos.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
