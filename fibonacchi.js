var  output = document.getElementById("output");

const btn = document.getElementById("recursiveFibonacchisubmit");
btn.addEventListener("click", callRecursiveFibonacchi);

function callRecursiveFibonacchi(){
    let input = document.getElementById("recursibeFibonacchiInput").value;
    const revalue =recursiveFibonacchi(input)
    output.innerHTML= revalue;
}

function recursiveFibonacchi(data){   
    if(data<2){
        console.log("From check condition");
        return  data;  
    }
    console.log("From below condition");
    return recursiveFibonacchi(data-1)+ recursiveFibonacchi(data-2);
} 

// Complexity O(2^n)


// end  recursive

function fibonacchi () {
    let inputdata = document.getElementById("fivInput").value;
    const fib = [0,1];
    for(let i = 2 ; i <= inputdata ; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return output.innerHTML = fib;

}

// Time Complexity Big-O for this Algorithom is O(n) because there is one loop and loop depend on the user input n







