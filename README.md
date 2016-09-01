curryClass
==========

This package provides function currying for a class constructor.

Here's a simple example:

```js
var curryClass = require('curry-class');

function MyClass(arg1, arg2) {
  this.arg1 = arg1;
  this.arg2 = arg2;
}
MyClass.prototype.show = function() {
  console.log(this.arg1, this.arg2);
}

var x = new MyClass('hello', 'world');
x.show(); // prints "hello world"

var CurriedClass = curryClass(MyClass, 'goodbye');

var y = new CurriedClass('now');
y.show(); // prints "goodbye now"
```
