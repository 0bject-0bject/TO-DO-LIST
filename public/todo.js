let input_task = document.querySelector('#input-task');
let button_task = document.querySelector('#button-task');
let todo = document.querySelector('#todo');
let todos = [];



let ul = document.createElement('ul');
let board_task = document.createElement('div');
board_task.id = 'board_task';
board_task.append(ul);
todo.append(board_task);

button_task.addEventListener('click', createTodoList);


///////////////////////////////////////////////////////////////

function createTodoList() {

    let one_task = document.createElement('li');
    one_task.id = 'one_task';

    let one_task_content = document.createElement('div');
    one_task_content.style = 'display:flex';
    let span = document.createElement('span');
    span.innerHTML = input_task.value;
    let checkbox = document.createElement('div');
    checkbox.id = 'checkbox';
    one_task_content.append(checkbox, span);

    let deleteButton = document.createElement('input');
    deleteButton.type = 'button';

    one_task.append(one_task_content, deleteButton);

    if (input_task.value !== '') {
        ul.append(one_task);
    } else {
        alert('....')
    }

    input_task.value = '';

    checkbox.addEventListener('click', markTask);
   one_task.addEventListener('click', deleteTask)

    ///////////////////////////////////////////////////////////////////////////

    function markTask(event) {
        event.target.classList.toggle('todo-is-completed');
        one_task.classList.toggle('done');
    }

    function deleteTask(event) {
        if (event.target.tagName === 'INPUT') {
       event.currentTarget.remove()
   }
    }


    //////////////////////////////////////////////////////////////////////////////



}