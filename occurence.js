const arr = [4, 5, 7, 2, 3, 4, 5, 8];
const target = 4;
let counter = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target){
        counter++;
    }
}
console.log("Count of 4: " + counter);