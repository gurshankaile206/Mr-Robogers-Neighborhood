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
Test: "should display "
code: $(document).ready(function() {
    $("form#roboger").submit(function() {
        event.preventDefault();
        const inputValue = $("#input1").val();
        const result = robogers(inputValue);
        $("#output").text(result);
    });
});
Expect: ()