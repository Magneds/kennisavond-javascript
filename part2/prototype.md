# Prototype

`prototype` is simpel gezegd de onzichtbare ketting tussen objecten. Elk object in JavaScript heeft een `prototype` attribute (soms te zien als `__proto__` in de devTools). Zodra er iets aangeroepen wordt in een object en datgene kan niet gevonden worden in het object, dan gaat hij de prototype-ketting aflopen naarboven toe om te kijken of dat de property daar wel gevonden kan worden.

Tevens hebben alle objecten de `Object.prototype` bovenaan de prototype-ketting. Dit verklaart waarom je vanuit alle objecten bij bijv. `.toString()` en `.valueOf()` kunt.

```javascript
var object = {};
console.log(object.toString()); // [object Object]
```

Aan een prototype kun je dingen aan toevoegen, net zoals bij een object in JavaScript. Door het linken van objecten zou je dus object properties door kunnen spelen naar andere objecten.

Een simpel voorbeeldje voor het linken van objecten

```javascript
var foo = {
	a: 'example'
};

var bar = Object.create(foo);

console.log(bar); // 'example'
console.log(bar.a); // 'example'
```

Belangrijk is om te weten dat bij het aanmaken van `a` en `b` in het voorbeeld hieronder, de functie `myName` niet gekopieerd wordt naar de desbetreffende objecten, maar dat de objecten een link bevatten naar `Foo.prototype`.

```javascript
function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function() {
    return this.name;
};

var a = new Foo("a");
var b = new Foo("b");

a.myName(); // "a"
b.myName(); // "b"
```

En een, iets minder simpel, voorbeeld van linken van object d.m.v. `prototype`

```javascript
function Person() {
	this.name = 'Adam';
}

Person.prototype.getName = function () {
	return this.name;
};

var papa = new Person();

var kid = Object.create(papa);
var child = Object.create(Person.prototype);

console.log(kid.getName());        // Adam
console.log(typeof child.getName); // Function
console.log(typeof child.name);    // undefined
```

## Hands on prototype

```bash
$ git clone https://github.com/Magneds/kennisavond-javascript
```

### Hands on 1
Fiks de JavaScript code in part2/hands-on-prototype/hands-on1

### Hands on 2
Maak de code werkend in part2/hands-on-prototype/hands-on2

