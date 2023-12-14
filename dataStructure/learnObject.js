const obj ={
    name : "Enam",
    age: 27,
    'office-designation':"Client assistant ",
    getNmae: function (){
        console.log(this.name)
    }
}

// Assign a vlue and key
obj.hobby = "watching Movie",

// Delete some value and keys

delete obj.hobby;

console.log(obj.name);
colsole.log(obj['age']);
console.log(obj['office-designation']);
console.log(obj);
obj.getNmae();


// Some othe method
// .keys() , .values() , .entries()