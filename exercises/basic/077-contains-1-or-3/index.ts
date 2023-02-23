//Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.
//Uzunluğu 2 olan bir tam sayı dizisinin 1 mi yoksa 3 mü içerdiğini test eden bir JavaScript programı yazın.

const arr = (dizi : number[]) => {
    if (dizi.includes(1) || dizi.includes(3)) {
        console.log("1 veya 3 var");
    } else {
        console.log("1 veya 3 yok");
    }
}

arr([2,4])
arr([1,3])


function contains13(nums:number[]) {

    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
       return true
    } 
    else
    {
       return false
    }
}

console.log(contains13([1, 5]));  
console.log(contains13([2, 3]));  
console.log(contains13([7, 5])); 