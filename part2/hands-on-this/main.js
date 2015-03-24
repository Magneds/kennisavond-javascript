var element = document.getElementById('container'),
	i;

function foo(num) {
	element.innerHTML += '<br />foo: ' + num;
	this.count++;
}

foo.count = 0;

for (i = 0; i < 10; ++i) {
	if (i > 5) {
		foo(i);
	}
}

element.innerHTML += '<br />foo.count: ' + foo.count;
element.innerHTML += '<br />this.count: ' + this.count;
