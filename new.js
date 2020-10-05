function _new(Class, ...args) {
    
}

let sanmao = _new(Dog, "三毛");
sanmao.bark(); //=>"wangwang"
sanmao.sayName(); //=>"my name is 三毛"
console.log(sanmao instanceof Dog); //=>true
