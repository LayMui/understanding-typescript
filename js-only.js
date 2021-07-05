const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
    //Adding string will get concatenate instead of computed mathmatically
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        return +num1 + +num2; //convert to number
    }
    
}


button.addEventListener("click", function() {
    console.log(add(input1.value, input2.value)); // value will always return String
});