function _new(Class, ...args) {
    if (!(Class instanceof Function)) {
        throw new TypeError("must be a FunctionF")
    }

    var obj = Object.create(Class.prototype);
    

}

let sanmao = _new(Dog, "三毛");
sanmao.bark(); //=>"wangwang"
sanmao.sayName(); //=>"my name is 三毛"
console.log(sanmao instanceof Dog); //=>true
