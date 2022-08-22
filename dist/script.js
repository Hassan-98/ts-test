"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_password, _test_testProp3, _test_emailAddress;
const todos = [];
const input = document.getElementById("todo-input");
const button = document.getElementById("todo-btn");
const todosContainer = document.getElementById("todos");
const addTodo = () => {
    const content = input.value;
    todos.push({ content, isComplete: false });
    input.value = "";
    render();
};
const render = () => {
    todosContainer.innerHTML = "";
    todos.forEach(todo => {
        const todoElement = document.createElement("div");
        todoElement.innerHTML = todo.content;
        todoElement.classList.add("todo");
        todoElement.classList.toggle("complete", todo.isComplete);
        todosContainer.appendChild(todoElement);
    });
};
button.addEventListener("click", addTodo);
const checkText = (text) => {
    return text.length > 0;
};
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "ADMIN";
    Roles["USER"] = "USER";
})(Roles || (Roles = {}));
const login = (creds) => {
    return creds.username === "admin" && creds.password === "admin";
};
console.log(login({
    username: "admin",
    password: "123456",
    email: "",
    age: "",
    role: Roles.ADMIN
}));
let checker;
checker = checkText;
let response;
const sendRequest = (type) => {
    if (type === "todos") {
        return [{ content: "todo 1", isComplete: false }, { content: "todo 2", isComplete: false }];
    }
    else if (type === "user") {
        return { username: "admin", password: "admin" };
    }
    return;
};
response = sendRequest("todos");
console.log(response);
let Todos;
const generateTodos = () => {
    let todos = [];
    let loop = Math.floor(Math.random() * 100);
    for (let i = 0; i < loop; i++) {
        todos.push({ content: `todo ${i + 1}`, isComplete: false });
    }
    return todos;
};
Todos = generateTodos();
console.log(Todos);
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let shuffledNumbers = shuffleArray(numbers);
console.log(shuffledNumbers);
class User {
    constructor(creds) {
        _User_password.set(this, void 0);
        this.type = "user";
        this.username = creds.username;
        this.email = creds.email;
        __classPrivateFieldSet(this, _User_password, creds.password, "f");
        this.age = creds.age;
        this.confirmed = creds.confirmed;
    }
    login(e, p) {
        if (e !== this.email)
            return null;
        if (p !== __classPrivateFieldGet(this, _User_password, "f"))
            return null;
        return {
            username: this.username,
            email: this.email,
            age: this.age,
            confirmed: this.confirmed,
            type: this.type
        };
    }
}
_User_password = new WeakMap();
const user = new User({
    username: "Hassan Ali",
    email: "7assan.3li1998@gmail.com",
    password: "123456",
    age: 10,
    confirmed: false
});
console.log(user, user.login("7assan.3li1998@gmail.com", "123456"));
class Admin extends User {
    constructor(creds) {
        super(creds);
        this.type = "admin";
    }
    printAdmin(validation) {
        if (!validation)
            return `Not Validated ${this.username}`;
        return `Validated ${this.username}`;
    }
}
Admin.user = "Admin User";
const admin = new Admin({
    username: "Hassan Ali",
    email: "7assan.3li1998@gmail.com",
    password: "123456",
    age: 24,
    confirmed: true
});
console.log(Admin.user);
console.log(admin.printAdmin(true));
class test {
    constructor(t1, t2) {
        this.testProp1 = "TEST";
        this.testProp2 = "TEST";
        _test_testProp3.set(this, "TEST");
        _test_emailAddress.set(this, "");
        this.testProp1 = t1;
        this.testProp2 = t2;
    }
    get email() {
        return __classPrivateFieldGet(this, _test_emailAddress, "f");
    }
    set email(value) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            __classPrivateFieldSet(this, _test_emailAddress, value, "f");
        }
        else {
            throw new Error("Email is invalid");
        }
    }
    change() {
        this.testProp1 = 't1';
        this.testProp2 = 't2';
        __classPrivateFieldSet(this, _test_testProp3, 't3', "f");
    }
}
_test_testProp3 = new WeakMap(), _test_emailAddress = new WeakMap();
const t = new test("Test1", "Test2");
t.change();
t.email = "test@test.com";
console.log(t);
console.log(t.email);
class Model {
    constructor(t) {
        this.type = "";
        this.data = [];
        this.type = t;
    }
    getData() {
        return this.data;
    }
    addData(item) {
        this.data.push(item);
    }
}
const printAddress = (address) => {
    return `${address.country}, ${address.city}, ${address.zipCode}`;
};
const getUsers = () => {
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
    });
};
getUsers().then(users => {
    console.log(users);
    let user = users[0];
    if (user.address.type === "global") {
        console.log(printAddress(user.address));
    }
});
//# sourceMappingURL=script.js.map