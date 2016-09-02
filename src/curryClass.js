module.exports = function curryClass(SourceClass) {
  var curriedArgs = Array.prototype.slice.call(arguments, 1);

  return function curriedConstructor() {
    var combinedArgs = curriedArgs.concat(Array.prototype.slice.call(arguments, 0));

    // Create an object that inherits from `proto`
    var hasOwnProto = Object(SourceClass.prototype) === SourceClass.prototype;
    var obj = Object.create(hasOwnProto ? SourceClass.prototype : Object.prototype);

    // Apply the function setting `obj` as the `this` value
    var ret = SourceClass.apply(obj, combinedArgs);

    if (Object(ret) === ret) { // the result is an object?
      return ret;
    }

    return obj;
  };
};
