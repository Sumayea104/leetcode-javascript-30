// 2667. create hello world

function createHelloWorld() {
    const greetings = "Hello World";
    return function(){
        return greetings;
    };
}
console.log(createHelloWorld()());