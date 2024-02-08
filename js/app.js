import { TodoList } from "./list.js";
import { Task } from "./task.js";

var l1 = new TodoList('Moja prva lista');
l1.createList(document.body);

var t1 = new Task();
t1.createInput();