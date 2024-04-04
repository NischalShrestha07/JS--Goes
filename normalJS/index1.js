function sum(callback, x, y) {
    let result = x + y
    callback(result)

}

function displayConsole(result) {
    console.log(result);
}
sum(displayConsole, 6, 4)


function mul(callme, a, b) {
    let answer = a * b
    callme(answer)



    function display(answer) {
        console.log(answer);


    }


    mul(display, 5, 4)