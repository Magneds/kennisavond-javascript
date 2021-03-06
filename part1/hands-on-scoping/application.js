;(function() {
	'use strict';

	var todoList = document.getElementById('todo-list'),
		target;

	function add() {
		var item = document.createElement('li');

		item.textContent = value;
		todoList.querySelector('ul').appendChild(item);
	}

	function done() {
		target.classList.add('done');
	}

	todoList.addEventListener('keyup', function(e) {
		var target = e.target,
			value = target.value;

		if (e.which === 13)
			add();
	});

	todoList.addEventListener('click', function(e) {
		target = e.target;
		done();
	});
})();
