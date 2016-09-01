var test = require('tape');
var curryClass = require('../src/curryClass');

test('curryClass', function(t) {
  ///////////////

  function MyClass(arg1, arg2) {
    this.argList = Array.prototype.slice.apply(arguments, [0]);
  }
  MyClass.prototype.result = function() {
    return this.argList;
  }

  var x = new MyClass('hello', 'world');
  t.deepEquals(x.result(), ['hello', 'world'])

  var CurriedClass = curryClass(MyClass, 'goodbye');
  var y = new CurriedClass('now');
  t.deepEquals(y.result(), ['goodbye', 'now'])

  var CurriedClass2 = curryClass(MyClass, 'one', 'two');
  var y = new CurriedClass2();
  t.deepEquals(y.result(), ['one', 'two'])

  var CurriedClass3 = curryClass(MyClass, 'one', 'two');
  var y = new CurriedClass3('three', 'four');
  t.deepEquals(y.result(), ['one', 'two', 'three', 'four'])

  t.end();
});
