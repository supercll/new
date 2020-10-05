function _new(Func, ...args) {
    if (!(Func instanceof Function)) {
        throw new TypeError("must be a FunctionF");
    }

    var obj = Object.create(Func.prototype);
    var res = Func.call(obj, ...args);

    if (res instanceof Object) {
        return res;
    }
    return obj;
}

let sanmao = _new(Dog, "三毛");
sanmao.bark(); //=>"wangwang"
sanmao.sayName(); //=>"my name is 三毛"
console.log(sanmao instanceof Dog); //=>true
