var person = {
    first: 'Jeff',
    last: 'Delaney'
};
// functions
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(5, 10);
var arr = [];
arr.push(1);
arr.push('651651');
arr.push(false);
// generics
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    }
    return Observable;
}());
var x;
var y;
var z = new Observable(23);
// is this working
