function isBitwisePowerOfTwo(){
    input = document.getElementById("powerOfTwoBitwiseInput").value;
    output = document.getElementById("output");

    if (input < 1){
        return output.innerHTML = false;
    }
    return  output.innerHTML = (input & (input-1)) === 0;

}

//  BigO = O(1)
// Time complexity is constant


function isPowerOfTwo(){
    input = document.getElementById("powerOfTwoInput").value;
    output = document.getElementById("output");

    if (input < 1){
        return output.innerHTML = false;
    }
    while (input > 1){
        if(input % 2 !== 0){
            return output.innerHTML = false;
        }
        input = input/2;
    }
    return output.innerHTML = true;
 }


//  BigO = O(logn)
// The Number of instruction execution increases as not grows by the same ammount 