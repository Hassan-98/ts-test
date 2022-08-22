const todos: { content: string; isComplete: boolean }[] = [];

const input: HTMLInputElement = document.getElementById("todo-input")! as HTMLInputElement;
const button: HTMLButtonElement = document.getElementById("todo-btn")! as HTMLButtonElement;
const todosContainer: HTMLElement = document.getElementById("todos")! as HTMLElement;

const addTodo = () => {
  const content: string = input.value;
  todos.push({ content, isComplete: false });
  input.value = "";
  render();
}

const render = () => {
  todosContainer.innerHTML = "";
  todos.forEach(todo => {
    const todoElement = document.createElement("div");
    todoElement.innerHTML = todo.content;
    todoElement.classList.add("todo");
    todoElement.classList.toggle("complete", todo.isComplete);
    todosContainer.appendChild(todoElement);
  });
}

button.addEventListener("click", addTodo);

const checkText = (text: string): boolean => {
  return text.length > 0;
}

enum Roles {
  ADMIN = "ADMIN",
  USER = "USER"
}

type Creds = {
  username: string;
  password: string;
  email: string;
  age: string | number;
  role: Roles;
}

const login = (creds: Creds): boolean => {
  return creds.username === "admin" && creds.password === "admin";
}

console.log(login({
  username: "admin",
  password: "123456",
  email: "",
  age: "",
  role: Roles.ADMIN
}));

let checker: (a: string) => boolean;

checker = checkText;

// Should be unknown type because you don't know what the sendRequest function will return;
let response: unknown;

const sendRequest = (type: string) => {
  if (type === "todos") {
    return [{ content: "todo 1", isComplete: false }, { content: "todo 2", isComplete: false }];
  } else if (type === "user") {
    return { username: "admin", password: "admin" };
  }
  return;
}

response = sendRequest("todos");
console.log(response);

// declare Todos array type
type Todos = { content: string; isComplete: boolean }[];

let Todos: Todos;

const generateTodos = (): Todos => {
  let todos: Todos = [];
  let loop: number = Math.floor(Math.random() * 100);

  for (let i = 0; i < loop; i++) {
    todos.push({ content: `todo ${i + 1}`, isComplete: false });
  }

  return todos;
}

Todos = generateTodos();
console.log(Todos);

// Utility Function Shuffle Any Array
const shuffleArray = (arr: any[]): any[] => arr.sort(() => Math.random() - 0.5);

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let shuffledNumbers = shuffleArray(numbers);

console.log(shuffledNumbers);

type USER = {
  username: string;
  email: string;
  password: string;
  age: number;
  confirmed: boolean;
}

type UserResponse = {
  username: string;
  email: string;
  age: number;
  confirmed: boolean;
  type: string;
}

class User {
  username: string;
  email: string;
  #password: string;
  age: number;
  private confirmed: boolean;
  readonly type: string = "user"

  constructor(creds: USER) {
    this.username = creds.username;
    this.email = creds.email;
    this.#password = creds.password;
    this.age = creds.age;
    this.confirmed = creds.confirmed;
  }

  login(e: string, p: string): (null | UserResponse) {
    if (e !== this.email) return null;
    if (p !== this.#password) return null;
    
    return {
      username: this.username,
      email: this.email,
      age: this.age,
      confirmed: this.confirmed,
      type: this.type
    }
  }
}

const user = new User({
  username: "Hassan Ali",
  email: "7assan.3li1998@gmail.com",
  password: "123456",
  age: 10,
  confirmed: false
});

console.log(user, user.login("7assan.3li1998@gmail.com", "123456"))

class Admin extends User {
  readonly type: string = "admin"
  static user: string = "Admin User"

  constructor(creds: USER) {
    super(creds);
  }

  printAdmin(validation: boolean): string {
    if (!validation) return `Not Validated ${this.username}`;

    return `Validated ${this.username}`;
  }
}

const admin = new Admin({
  username: "Hassan Ali",
  email: "7assan.3li1998@gmail.com",
  password: "123456",
  age: 24,
  confirmed: true
})

console.log(Admin.user);
console.log(admin.printAdmin(true));

class test {
  private testProp1: string = "TEST";
  protected testProp2: string = "TEST";
  #testProp3: string = "TEST";
  #emailAddress: string = "";

  constructor(t1: string, t2: string) {
    this.testProp1 = t1;
    this.testProp2 = t2;
  }

  get email(): string {
    return this.#emailAddress;
  }

  set email(value: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      this.#emailAddress = value; 
    } else {
      throw new Error("Email is invalid");
    }
  }

  change() {
    this.testProp1 = 't1';
    this.testProp2 = 't2';
    this.#testProp3 = 't3';
  }
}

const t = new test("Test1", "Test2")

t.change();

t.email = "test@test.com";

console.log(t);
console.log(t.email);

// Model Interface
interface IModel {
  type: string;
  data: string[];
  getData(): string[];
  addData(item: string): void;
}

// Singleton
class Model implements IModel {
  type: string = "";
  data: string[] = [];

  private constructor(t: string) {
    this.type = t;
  }

  getData(): string[] {
    return this.data;
  }

  addData(item: string): void {
    this.data.push(item);
  }
}

// class USER extends Model {
//   constructor(t: string) {
//     super(t)
//   }
// }


/**
 * 
 * Difference between private, #private_identifier and readonly props in classes
 * 
 * #private_identifier: can't be accessed from outside class and it's not visible if you printed the class
 * private: can't be accessed from outside class but it still visible if you printed the class
 * protected: can't be accessed from outside class but it still visible if you printed the class [Difference between private that privated can't be accessed in extented classes]
 * readonly: it's value can't be changed outside class constructor or outside class
 * 
 */

type GlobalAddress = {
  country: string;
  city: string;
  zipCode: number
  type: "global";
}

type LocalAddress = {
  city: string;
  area: string;
  block: number;
  type: "local";
}

interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: GlobalAddress | LocalAddress
}

const printAddress = (address: GlobalAddress): string => {
  return `${address.country}, ${address.city}, ${address.zipCode}`;
}

const getUsers = (): Promise<IUser[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Hassan Ali",
          email: "7assan.3li1998@gmail.com",
          password: "123465",
          phone: "01146321817",
          address: {
            type: "global",
            country: "Egypt",
            city: "Sohag",
            zipCode: 82517
          }
        },
        {
          id: 2,
          name: "Mohamed Ali",
          email: "Mohamed.3li@gmail.com",
          password: "123465",
          phone: "01145463142",
          address: {
            type: "local",
            city: "Sohag",
            area: "Shahid",
            block: 23
          }
        }
      ]);
    }, 2000);
  })
}

getUsers().then(users => {
  console.log(users);
  let user = users[0];
  if (user.address.type === "global") {
    console.log(printAddress(user.address))
  }
  // if ("country" in user.address) {
  //   console.log(printAddress(user.address))
  // }
});
