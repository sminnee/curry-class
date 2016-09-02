var test = require('tape');
var curryClass = require('../src/curryClass');

function MyClass() {
  this.argList = Array.prototype.slice.apply(arguments, [0]);
}

test('curryClass', function curryClassTest(t) {
  var CurriedClass = curryClass(MyClass, 'goodbye');
  var CurriedClass2 = curryClass(MyClass, 'one', 'two');
  var CurriedClass3 = curryClass(MyClass, 'one', 'two');

  MyClass.prototype.result = function result() {
    return this.argList;
  };

  t.deepEquals((new MyClass('hello', 'world')).result(), ['hello', 'world']);

  t.deepEquals((new CurriedClass('now')).result(), ['goodbye', 'now']);

  t.deepEquals((new CurriedClass2()).result(), ['one', 'two']);

  t.deepEquals((new CurriedClass3('three', 'four')).result(), ['one', 'two', 'three', 'four']);

  t.end();
});
