## Roboger's Neighborhood

#### By Gurshan Kaile

#### A simple javscript program that outputs the user's input value and returns a range of numbers from 0 to users inputted number with some expections

## Technologies Used 

* HTML
* CSS
* Javascript
* JQuery

## Description 

The browser application allows the user to input a value, the program will then count from 0 to inputted value with the exception that numbers containing a 1, 2, and 3 are equal to strings "beep", "boop", or "Won't you be my neighbor?". These exceptions are written from least to most important. The first expection should apply unless the second expection does, and the same with the third. 

* The number 13 should be replaced with "Won't you be my neighbor?"
* The number 21 should be replaced with "Boop".
* The number 32 should be replaced with "Won't you be my neighbor?"

Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5

## Setup/Installation Requirements 

* clone this repository to your desktop
* Navigate to the directory on your device
* Open the file in VS code
* Open the browser extension
* Input value in browser and test out results

## Known Bugs

* none

## Tests


// Business logic tests

Describe: robogers(input);
Test: "It should return a string with a 0 if the number 0 is inputted"
code: function robogers(input) {
    if (input === 0) {
        return "0";
    }
};
Expect(robogers(0).toEqual([0]); 


Test: "It should return string "Beep" if the number 1 is inputted"
code: function robogers(input) {
    if  (input === 0) {
        return "0";
    }
    if  (input === 1) {
        return "Beep"
    }
}
Expect(robogers(1).toEqual("Beep"))


Test: "It should return string "Boop" if the number 2 is inputted"
code: function robogers(input) {
    if  (input === 0) {
        return "0";
    }
    if  (input === 1) {
        return "Beep"
    }
    if  (input === 2) {
        return "Boop"
    }
Expect(robogers(2).toEqual("Boop")); 


Test: "It should return string "Won't you be my neighbor?" if number 3 is inputted"
code: function robogers(input) {
    if  (input === 0) {
        return "0";
    }
    if  (input === 1) {
        return "Beep"
    }
    if  (input === 2) {
        return "Boop"
    }
    if (input === 3) {
        return "Won't you be my neighbor?";
    }
};
Expect(robogers(3).toEqual("Won't you be my neighbor?")); 




Test: "It should output 'Won't you be my neighbor?' if user inputs 32"
code: function robogers(input) {
   
    if (!Number.isInteger(input)) {
        return "input is not an number";
    }
    let string = input.toString().split('');
    
     if  (string.includes('0')) {
        return "0";
    } if (string.includes('3')) {
        return "Won't you be my neighbor?";
};
Expect(robogers(32).toEqual("Won't you be my neightbor?")); 



Test: "It should output 'boop' if user inputs 21"
code: function robogers(input) {
   
    if (!Number.isInteger(input)) {
        return "input is not an number";
    }
    let string = input.toString().split('');
    
     if  (string.includes('0')) {
        return "0";
    } if (string.includes('3')) {
        return "Won't you be my neighbor?";
    } else if  (string.includes('2')) {
        return "Boop"
};
Expect(robogers(21).toEqual("?")); 



Test: "It should output 'beep' if user inputs 11"
code: function robogers(input) {
   
    if (!Number.isInteger(input)) {
        return "input is not an number";
    }
    let string = input.toString().split('');
    
     if  (string.includes('0')) {
        return "0";
    } if (string.includes('3')) {
        return "Won't you be my neighbor?";
    } else if  (string.includes('2')) {
        return "Boop"
    } else if  (string.includes('1')) {
        return "Beep"
    }
Expect(robogers(11).toEqual("beep")); 


Describe: counter();
Test: "It should output an array starting from 0 to the users input value"
function range(input) {
    let output = [];
    let count = 0;
    while(count <= input) {
        output.push(count);
        count++
    }
    return output
}
Expect(robogers(5).toEqual([0,1,2,3,4,5])); 

Describe: robogers(); 
Test: "It should replace values 0 through 3 with the given string values using .map and if conditions" 
code: function robogers(input) {
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
            return (number);
        };
    });
    return output
};
Expect(robogers(5).toEqual(["0","Beep","Boop", "Won't you be my neighbor?", "4", "5"]));

Test: "It should replace values 0 through 3 with the given strings and return the numbers as integers using parseInt"
code: function robogers(input) {
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
Expect(robogers(5).toEqual([0,"Beep","Boop", "Won't you be my neighbor?", 4, 5]));

// UI logic test

Describe: const result = robogers(inputValue);
Test: "should display output value on Webpage"
code: $(document).ready(function() {
    $("form#roboger").submit(function() {
        event.preventDefault();
        const inputValue = $("#input1").val();
        const result = robogers(inputValue);
        $("#output").text(result);
    });
});
Expect: (robogers(5).toEqual([0,"Beep","Boop", "Won't you be my neighbor?", 4, 5]));

## License

**MIT**

Copyright (c) 2021 Gurshan Kaile

## Contact Information 

Gurshan Kaile gurshankaile206@gmail.com