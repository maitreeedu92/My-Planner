'use strict'

const todos = getSavedTodos();
const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters);

document.querySelector('#filter-todo').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})

document.querySelector('#todo-form').addEventListener('submit', (e) =>{
    e.preventDefault();
    const todoValue = e.target.elements.addTodo.value.trim();
    if (todoValue.length > 0){
        todos.push({
        id: uuidv4(),
        text: todoValue, 
        completed: false});
        saveTodos(todos);
        renderTodos(todos, filters);
        e.target.elements.addTodo.value='';
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) =>{
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})


/* For Clock */
let clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)


/* For changing background color */
const buttons = document.querySelectorAll('.color-button');
const body = document.querySelector('body');

console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(e.target);
        if (e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white'){
            body.style.backgroundColor =  'rgb(208 103 103)';
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = '#5454b6';
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = '#dddd6f';
        }
		if (e.target.id === 'black'){
            body.style.backgroundColor = '#2B292E';
        }
    })
})

//Day of the week
let date = new Date();
let dayOfWeek = date.getDay();
let nameOfTheDay;

switch(dayOfWeek){
    case 0: 
        nameOfTheDay = 'Sunday';
        break;
    case 1:
        nameOfTheDay = 'Monday';
        break;
    case 2:
        nameOfTheDay = 'Tuesday';
        break;
    case 3:
        nameOfTheDay = 'Wednesday';
        break;
    case 4:
        nameOfTheDay = 'Thursday';
        break;
    case 5:
        nameOfTheDay = 'Friday';
        break;
    case 6:
        nameOfTheDay = 'Saturday';
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfTheDay}`;