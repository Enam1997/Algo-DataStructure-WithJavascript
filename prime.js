function isPrime(){
    input = document.getElementById("primeInput").value;
    output = document.getElementById("output");

    if (input < 2 ){
       return  output.innerHTML = false;
    }
    for(let i = 2; i <input ; i++){
        if( input % i === 0){
            return  document.getElementById("output").innerHTML= false;
        }
    }
    document.getElementById("output").innerHTML= true;
}

// Big-O = O(n)



// Another solution

function isPrime2(){
    input = document.getElementById("primeInput").value;
    output = document.getElementById("output");

    if (input < 2 ){
       return  output.innerHTML = false;
    }
    for(let i = 2; i <Math.sqrt(input); i++){
        if( input % i === 0){
            return  document.getElementById("output").innerHTML= false;
        }
    }
    document.getElementById("output").innerHTML= true;
}

// Big-O = O(sqrt(n))
