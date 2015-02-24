# Scoping

Scoping en closures, twee belangrijke onderwerpen waar je heel veel mee te maken hebt, daarom beginnen we hier deze kennisvanavond mee.

Een scope in javascript is een soort geisoleerde laag, de isolatie houd alles van de scope ook echt binnen de scope. Alles wat niet nadrukkelijk binnen de scope bekend is gemaakt wordt impliciet aan de omliggende scope doorgegeven, hierdoor 'erf' je variabele referenties en kun je dus variabelen buiten je scope aanpassen.

```javascript
// global scope ("window" in browsers)
var a = 'a',
	b = 'b';

function scopeMe()
{
	console.log(a); // undefined
	// function scope
	var a = false,
		c = 'c';

	console.log(a, b, c); // false, b, c
}

scopeMe();

console.log(a, b); // a, b
console.log(c); // ReferenceError: c is not defined
```

Zoals je ziet wordt `a` zowel in de globale scope als in de *function scope* gedeclareerd en kan de function bij de globale scope maar de globale scope niet bij de scope die wordt gecreëerd door de functie. De declaratie van `a` binnen de function zorgt ervoor dar er een *nieuwe* variabele wordt gedeclareerd die geldend is binnen die scope.
De scope "bubbelt" dus als het ware omhoog.
Maar zoals je ziet is er een kleine kanttekening: de eerste `console.log` in scopeMe geeft je `undefined` als output, dit komt door "hoisting", dat is "het naar boven halen" van variabelen binnen de scope. Compile-time worden alle variabelen binnen de scope verzameld en in één keer gedeclareerd. Omdat `a` opnieuw wordt gedeclareerd trekt de compiler het reserveren van het geheugen voor de variabele omhoog. Dit is waarom we variabelen altijd aan het begin van de scope declareren, om verwarring te voorkomen.

Verder kun je hier als belangrijke les uit trekken dat je de globale scope "schoon" moet houden door er niet onnodig variabelen in te declareren (dit geld overigens voor iedere scope). Je kunt er namelijk vanuit ieder punt in de applicatie bij om uit te lezen of te veranderen. Wanneer iemand bijvoorbeeld een script weet te injecteren om al je globale variabelen uit te lezen of te modificeren vormt dat een groot risico! Zorg er dus voor dat alles ook echt zijn eigen scope heeft.

Hier nog een wat complexer voorbeeld met meer nesting:

```javascript
;(function() {
	var inIIFE = true;

	function doA()
	{
		var a = 'a';

		function printMe()
		{
			var printed = true;
			console.log(a, printed, inIIFE); // a, true, true
		}

		printMe();
	}

	doA();
	printMe(); //ReferenceError: printMe is not defined
})(); // IIFE (Immediately Invoked Function Expression

console.log(inIIFE); // ReferenceError: inIIFE is not defined
```

Wat je hier ziet is een "Immediately Invoked Function Expression" (IIFE), deze creêert een nieuwe scope "bubble", alles wat hierbinnen wordt gedeclareerd is van buitenaf niet beschikbaar. In de IIFE wordt een function `doA` gedeclareerd, welke een nieuwe scope bubble met zich meebrengt, hierin zit `printMe()`, die omhoog bubbelt naar alle bovenliggende scopes om de variabelen te kunnen printen:
`a`: in de `printMe` scope? nee -> in de `doA` scope? ja -> print
`printed`: in de `printMe` scope? ja -> print
`inIFFE`: in de `printMe` scope? nee -> in de `doA` scope? nee -> in de IIFE scope? ja -> print.

Download nu de kennisavond-javascript repo:
```bash
$ git clone https://github.com/Magneds/kennisavond-javascript
```
en fix het script in hands-on-scoping/application.js, er zitten wat bugs in! Bonuspunten als je het helemaal netjes fixt want dit kan natuurlijk niet zo!
