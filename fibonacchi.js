
function fibonacchi () {
    var inputdata = document.getElementById("fivInput").value;
    const fib = [0,1];
    for(let i = 2 ; i < inputdata ; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    document.getElementById("output").innerHTML = fib;

}

// Time Complexity Big-O for this Algorithom is O(n) because there is one loop and loop depend on the user input n


