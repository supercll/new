Object.prototype.create = function (prototype) {
    if (!(prototype instanceof Object)) {
        throw new TypeError("prototype must be an Object");
    }

    function Temp() {}
    Temp.prototype = prototype;
    return new Temp();
};

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

function Dog(name) {
    this.name = name;
}
Dog.prototype.bark = function () {
    console.log("wangwang");
};
Dog.prototype.sayName = function () {
    console.log("my name is " + this.name);
};

let sanmao = _new(Dog, "三毛");
sanmao.bark(); //=>"wangwang"
sanmao.sayName(); //=>"my name is 三毛"
console.log(sanmao instanceof Dog); //=>true
