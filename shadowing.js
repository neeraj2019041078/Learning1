// varible shadowing is when variable declared inside the scope have same name in outer scope .(inner shadows outer)

function test(){
    let a="hello";
    if(true){
        let a="bye";
        console.log(a);
    }
}
test();

//illedgal
function test(){
    let a="hello";
    if(true){
        var a="bye";
        console.log(a);
    }
}
test();
