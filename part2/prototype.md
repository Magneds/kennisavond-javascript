# Prototype

`prototype` is simpel gezegd de onzichtbare ketting tussen objecten, de prototype-chain. Elk object in JavaScript heeft een `prototype` attribute (soms te zien als `__proto__` in de devTools). Zodra er iets aangeroepen wordt in een object en datgene kan niet gevonden worden in het object, dan gaat hij de prototype-ketting aflopen om te kijken of dat de property daar wel gevonden kan worden.

Tevens hebben alle objecten de `Object.prototype` bovenaan de prototype-ketting. Dit verklaart waarom je vanuit alle objecten bij bijv. `.toString()` en `.valueOf()` kunt.

```javascript
var object = {};
console.log(object.toString()); // [object Object]
```

Aan een prototype kun je dingen toevoegen, net zoals bij een object in JavaScript. Door het linken van objecten zou je dus object properties door kunnen spelen naar andere objecten.

## Object.create

Naast een aantal standaard functies zoals `Object.keys` en `Object.defineProperty` bestaat er ook de functie `Object.create`. Met deze functie kan je een object als het ware kopieren, met als basis een link naar het opgegeven object. Op deze manier kan het nieuwe object wel bij de properties van het originele object.

Een simpel voorbeeldje voor het linken van objecten is door het gebruik van `Object.create`.

```javascript
var foo = {
	a: 'example'
};

var bar = Object.create(foo);

console.log(bar); // Object {a: "example"}
console.log(bar.a); // 'example'
```

_FYI: de hierboven beschreven functies zijn wel IE9+ en hebben voor IE8 en lager een polyfill nodig, dus let hierop._

## Prototype-linking

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
console.log(typeof child.getName); // function
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

