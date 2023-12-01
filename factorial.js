function factorial(){
    input = document.getElementById("facInput").value;
    result = 1;
    for (let i = 2; i<=input ; i++){

        result = i * result
    }
    document.getElementById("output").innerHTML= result;
}


// Time Complexity Big-O for this Algorithom is O(n) because there is one loop and loop depend on the user input n