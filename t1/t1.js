'use strict';

// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: false,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },

  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const lista = document.querySelector('#target');
for (const todo of todoList) {
  let checkAttr = '';
  if (todo.completed) {
    checkAttr= 'checked';
  }

  const html = `<li>
                  <input type="checkbox" id="todo-${todo.id}" ${checkAttr}>
                  <label for ="todo-1">${todo.task}</label>
                </li>`;
lista.insertAdjacentHTML('beforeend', html);
}
