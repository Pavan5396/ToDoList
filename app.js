const btn = document.querySelector('.bi');
const todoItems = document.querySelector('.todo-list');
const todoText = document.querySelector('.todoText')
const filterTodo = document.querySelector('.listFilter')

btn.addEventListener('click', function (e) {
    //prevent form from submitting
    e.preventDefault();
    //create element div
    const todoDiv = document.createElement('div');
    //adding class to created div
    todoDiv.classList.add('todo');
    //create li
    const newtodoList = document.createElement('li');
    //adding class to style in css
    newtodoList.classList.add('todoItem')
    //adding the innertext of todotext value to list
    newtodoList.innerText = todoText.value;
    // append or add newtodlist to create tododiv
    todoDiv.appendChild(newtodoList);
    //clear the list after adding in list
    todoText.value = '';

    //create complete button
    const completed = document.createElement('button');
    //adding class to style in css
    completed.classList.add('completedBtn')
    //adding the innerhtml to add icon  to list
    completed.innerHTML = '<i class="fa-solid fa-check"></i>';
    // append or add completed btn to create tododiv
    todoDiv.appendChild(completed)

    //create delete button
    const deleteBtn = document.createElement('button');
    //adding class to style in css
    deleteBtn.classList.add('deleteBtn');
    //adding the innerhtml to add icon  to list
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    // append or add deleteBtn btn to create tododiv
    todoDiv.appendChild(deleteBtn)


    todoItems.appendChild(todoDiv);


})

todoItems.addEventListener('click', function (e) {
    const item = e.target;

    if (item.classList[0] === 'deleteBtn') {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === 'completedBtn') {
        const todo = item.parentElement;
        todo.classList.toggle('completedStyle');

    }

})


filterTodo.addEventListener('click', function (e) {
    const filter = todoItems.childNodes;
    filter.forEach(function (todo) {

        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }

                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }

                break;


        }
    });
})