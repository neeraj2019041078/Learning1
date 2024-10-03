// Like in other language uses classes and subclass for inherit the properties from other class as like javascript uses prototype inheritance for creating objects that have inherit properties from other class


const a={
    name:"neeraj",
    age:24,
    deevia:function(){
        console.log("Full Stack Developer")
    }
}

const k=Object.create(a);
k.zscaler=function(){
    console.log("trainee engineer")
}
k.deevia()
k.zscaler()
console.log(k.__proto__==a)