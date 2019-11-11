let todos = [];
const input = $('.todo-input');
const todoList = $('#todo-list');

getTodos();

$('.create-todo').on('click', createTodo);

function createTodo() {
	createTodoItem(input.val());

	saveTodo(input.val());

	input.val('');
	input.focus();
}

function saveTodo(todo) {
	todos.push(todo)
	
	localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
	var todosData = JSON.parse(localStorage.getItem('todos'));

	if (todosData !== null) {
		
		todosData.forEach(todo => createTodoItem(todo))

		todos = todosData;
	}
}

function createTodoItem(todo) {
	const todoItem = $('<div></div>');
	todoItem.addClass('todo-list-item');
	todoItem.text(todo);
	todoList.append(todoItem);
}

$(document).on('click', '.todo-list-item', function () {
	$(this).slideUp(700, function () {
		$(this).remove()
	})
});

$(document).on('mouseover', '.todo-list-item', function () {
	$(this).addClass('animate');
	$(this).siblings().removeClass('animate');
});

$(document).on('mouseleave', '.todo-list-item', function () {
	$('.todo-list-item').removeClass('animate');
});





