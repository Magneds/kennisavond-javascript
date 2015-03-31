/**
 * Maak gebruik van de `prototype`-chain door een NumberEditor te maken welke in de `action` method alleen nummers toelaat in het tekstveld
 */

;(function(window) {
	'use strict';

	function Editor(element) {
		this.__construct(element);
	}

	Editor.prototype.__construct = function __construct(element) {
		element.addEventListener('keypress', this.action);
	};

	Editor.prototype.action = function action(event) {
		console.log(event);
		return true;
	};

	function NumberEditor() {
		Editor.apply(this, arguments);
	}

	new Editor(document.querySelector('.textfield'));
	new NumberEditor(document.querySelector('.numbersOnly'));
})(window);
