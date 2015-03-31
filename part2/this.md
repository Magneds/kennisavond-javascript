# this

Een veelvoorkomend keyword in JavaScript is `this`. De naam van dit keyword maakt het vooral lastig om daadwerkelijk te begrijpen wat `this` precies is, het wijst namelijk niet altijd naar "dit ding waar ik in zit".

```javascript
function example() {
	console.log(this);
}

function Another() {
	console.log(this);
}

console.log(this);  // Window {}

example();          // Window {}
new Another();      // Another {}
```

## Call-site

De `call-site` is de plek waar dat de functie aangeroepen, niet aangemaakt, wordt. Dit heeft invloed op de waarde van `this`.

```javascript
function baz() {
	// call-stack is: `baz`
	// dus de call-site is in de global scope

	console.log('baz');

	bar(); // <-- call-site voor `bar`
}

function bar() {
	// call-stack is: `baz` -> `bar`
	// dus de call-site is in `baz`

	console.log('bar');
	foo(); // <-- call-site voor `foo`
}

function foo() {
	// call-stack is: `baz` -> `bar` -> `foo`
	// dus de call-site is in `bar`

	console.log('foo');
}

baz(); // <-- call-site voor `baz`
```

## new Binding

Wanneer een functie aangeroepen wordt met `new`, dan is `this` het nieuwe constructed object

```javascript
function foo(a) {
	this.a = a;
}

var bar = new foo(2);

console.log(bar.a); // 2
```

## Explicit binding

Wanneer een functie aangeroepen wordt met `call` of `apply`, dan is het 1e argument `this`

```javascript
function foo () {
	console.log(this.a);
}

var obj = {
	a: 2
};

foo.call(obj); // 2
```

## Implicit binding

Wanneer een functie aangeroepen wordt vanuit een context, dan is die context `this`

```javascript
function foo () {
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo(); // 2
```

## Default binding

Wanneer alle voorgaande niet matchen, dan geldt deze binding. Als je in `strict mode` draait, dan is het `undefined` en anders is het de global

```javascript
function foo() {
	console.log(this.a);
}

function bar() {
	'use strict';

	console.log(this.a);
}

var a = 2;

foo(); // 2
bar(); // TypeError: this is undefined
```

## Function.prototype.bind

`bind` maakt een nieuwe functie welke bij aanroep de `this` krijgt die opgegeven is als eerste argument bij het aanmaken van de functie.

```javascript
var Button = function(content) {
  this.content = content;
};

Button.prototype.click = function() {
  console.log(this.content + ' clicked');
}

var myButton = new Button('OK');
myButton.click();

var looseClick = myButton.click;
looseClick(); // not bound, 'this' is not myButton

var boundClick = myButton.click.bind(myButton);
boundClick(); // bound, 'this' is myButton
```

## Hands on this

```bash
$ git clone https://github.com/Magneds/kennisavond-javascript
```

Fiks de code in part2/hands-on-this zo dat op de juiste manier een teller bijgehouden wordt.

Bonuspunten: Waarom geeft `console.log(this.count);` `NaN` bij de start van de hands-on?
