
// Business logic 

// create numbers range function 
// pass thru input num 
// intialize an empty array 
// create a loop starting from 0 up to the users input num
// push each iteration of the index into the array as a string using .toString method

// create robogers callback function using map to access range function array of nums
// set our edge cases and return values
// return output 


function robogers(input) {
    let numArray = [];
    let count = 0;
    while (count <= input) {
        numArray.push(count.toString());
        count ++;
    }
    let output = numArray.map(function(number){
        if (number.includes('3')) {
            return number = "Won't you be my neighbor?";
        } else if (number.includes("2")) {
            return number = "Boop";
        } else if (number.includes('1')) {
            return "Beep";
        } else {
            return parseInt(number);
        };
    });
    return output
};


// UI logic

$(document).ready(function() {
    $("form#roboger").submit(function() {
        event.preventDefault();
        const inputValue = $("#input1").val();
        const result = robogers(inputValue);
        $("#output").text(result);
    });
});