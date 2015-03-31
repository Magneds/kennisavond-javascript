/**
 * Fix de JavaScript error
 */

function Selfie(target) {
	this.target = target;
	this.count  = 0;
}

Selfie.protoype.snap = function() {
	this.target.innerHTML = 'me' + (++this.count);
};

Selfie.prototype.delay = function(timeout) {
	setTimeout(this.snap, timeout || 1000);
};
