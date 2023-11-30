

function fibonacchi () {
    var inputdata = document.getElementById("fivInput").value;
   
    const fib = [0,1];
    for(let i = 2 ; i < inputdata ; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }

    document.getElementById("output").innerHTML = fib;
    // return fib;
    

}

// console.log(fibonacchi(7));