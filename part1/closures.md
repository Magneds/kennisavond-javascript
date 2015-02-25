# Closures

Wanneer je bij de scope kunt, vanuit een andere context in je code dan de originele plek van de scope, dan hebben we het over een closure.
Een voorbeeld van een closure is bijvoorbeeld:

```javascript
function decorateItem(item, decorationMethod) {
	var notRandom = 'not random at all';

	return decorationMethod(item, notRandom);
}

function run() {
	var random = Math.random(),
		list = [
			{item: 'a'},
			{item: 'b'},
			{item: 'c'},
		], i;

	for (i = 0; i < list.length; ++i)
	{
		decorateItem(list[i], function(object, info) { // closure
			object.random = random; // decorateItem scope can access run scope variables
			object.info = info; // not otherwise
			return object;
		});
	}

	console.log(list);
}

run();
```

Zoals je ziet kan de `decorateItem` scope bij de random variabele uit `run`, dat is closure. Een meer technische omschrijving zou zijn: De functie kan bij zijn *lexical scope* ondanks dat deze wordt aangeroepen buiten deze scope.

Een ander korter, simpeler voorbeeld:

```javascript
function addEventHandler(name, selector) {
	document.querySelector(selector).addEventHandler('click', function handler() {
		console.log('Making ' + name + ' awesome');
	});
}

addEventHandler("the button", "#awesomeButton");
```

Hands-on:
Zorg ervoor dat in kennisavond-javascript/part1/hands-on-closures/application.js het tekstveld leeg wordt gemaakt nadat `add` klaar is.
