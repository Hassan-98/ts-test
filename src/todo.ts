interface Todo {
  id: number;
  content: string;
  isComplete: boolean;
}

interface ITodos {
  todos: Todo[];
  generateTodoId: () => number;
  getTodo: (id: number) => Todo | null;
  addTodo: (content: string) => void;
  updateTodo: (id: number, content: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  saveTodos: () => void;
  renderTodos: () => void;
}

const addTodoButton = document.querySelector('.todo-app button')! as HTMLButtonElement;
const errMessageContainer = document.getElementById('errMessage')! as HTMLDivElement;
const localStorageTodos = localStorage.getItem('TypeScriptTodos');

const savedTodos: Todo[] = localStorageTodos ? JSON.parse(localStorageTodos) : [];

class TODOs implements ITodos {
  todos: Todo[];

  constructor(todos: Todo[]) {
    this.todos = todos;
    this.renderTodos();
  }

  get totalTodos(): number {
    return this.todos.length
  }

  generateTodoId(): number {
    return Math.floor(Math.random() * 100000) + Date.now()
  }

  getTodo(id: number): (Todo | null) {
    const todo = this.todos.find(todo => todo.id === id);
    return todo ? todo : null;
  }

  addTodo(content: string): void {
    if (!content) throw new Error("Todo content is empty");

    this.todos.push({
      id: this.generateTodoId(),
      content,
      isComplete: false
    });

    this.saveTodos();
    this.renderTodos();
  }

  updateTodo(id: number, content: string): void {
    let todoIndex = this.todos.findIndex(todo => todo.id === id);

    if (todoIndex === -1) throw new Error("Todo is not found");

    let todo = { ...this.todos[todoIndex], content }

    this.todos[todoIndex] = todo;

    this.saveTodos();
    this.renderTodos();
  }

  toggleTodo(id: number): void {
    let todoIndex = this.todos.findIndex(todo => todo.id === id);

    if (todoIndex === -1) throw new Error("Todo is not found");

    let todo = { ...this.todos[todoIndex], isComplete: !this.todos[todoIndex].isComplete }

    this.todos[todoIndex] = todo;

    this.saveTodos();
    this.renderTodos();
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);

    this.saveTodos();
    this.renderTodos();
  }

  saveTodos(): void {
    localStorage.setItem('TypeScriptTodos', JSON.stringify(this.todos));
  }

  generateTodoHTML(todo: Todo): HTMLDivElement {
    let todoContainer = document.createElement('div');
    todoContainer.className = "todo";

    let contentContainer = document.createElement('p');
    contentContainer.textContent = todo.content;

    if (todo.isComplete) contentContainer.className = 'completed';

    contentContainer.addEventListener('click', () => {
      this.toggleTodo(todo.id);
    });

    let updateButton = document.createElement('i');
    updateButton.textContent = "Update";
    updateButton.id = todo.id.toString();    
    
    updateButton.addEventListener('click', () => {
      addTodoButton.textContent = "Update";
      addTodoButton.id = todo.id.toString();

      const todoInput = document.getElementById('add-todo')! as HTMLInputElement;
      todoInput.value = todo.content;
    });

    let deleteButton = document.createElement('i');
    deleteButton.textContent = "Delete";
    deleteButton.id = todo.id.toString();

    deleteButton.addEventListener('click', () => {
      this.deleteTodo(todo.id);
    });

    todoContainer.append(contentContainer, updateButton, deleteButton);

    return todoContainer;
  }

  renderTodos(): void {
    const todoContainerElement = document.querySelector('.todo-container')! as HTMLDivElement;

    let renderedTodos = document.createElement('div');

    for (const todo of this.todos) {
      renderedTodos.append(this.generateTodoHTML(todo));
    }

    todoContainerElement.innerHTML = "";
    todoContainerElement.append(renderedTodos);
  }
}

const TodosInstance = new TODOs(savedTodos);

const showErrorMessage = (errorMessage: string) => {
  errMessageContainer.textContent = errorMessage;
  errMessageContainer.style.display = "block";
}

const hideErrorMessage = () => {
  errMessageContainer.textContent = "";
  errMessageContainer.style.display = "none";
}

addTodoButton.onclick = () => {
  hideErrorMessage();

  const todoInput = document.getElementById('add-todo')! as HTMLInputElement;

  if (!todoInput.value) return showErrorMessage("Todo content is empty");

  const id = addTodoButton.id;

  if (id) {
    TodosInstance.updateTodo(+id, todoInput.value);
    addTodoButton.removeAttribute('id');
    addTodoButton.textContent = "Add";
  } else {
    TodosInstance.addTodo(todoInput.value);
  }

  todoInput.value = "";

  todoInput.focus();
}