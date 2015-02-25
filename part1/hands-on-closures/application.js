;(function() {
	'use strict';

	var todoList = document.getElementById('todo-list');

	function add(text) {
		var item = document.createElement('li');

		item.textContent = text;
		todoList.querySelector('ul').appendChild(item);
	}

	function done(item) {
		item.classList.add('done');
	}

	todoList.querySelector('input[name="new"]').addEventListener('keyup', function(e) {
		if (e.which === 13)
			add(e.target.value);
	});

	todoList.addEventListener('click', function(e) {
		if (e.target.nodeName !== 'LI') return;

		done(e.target);
	});
})();
