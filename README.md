
Describe: beepBoop()
Test: "It should return a string with a 0 if the number 0 is inputted"
Expect(beepBoop(0).toEqual([0]); 

function beepBoop(input) {
    if (input === 0) {
        return "0";
    }
};

Describe: beepBoop(); 
Test: "It should return string "Beep" if the number 1 is inputted"
Expect(beepBoop(1).toEqual("Beep"))

function beepBoop(input) {
    if  (input === 0) {
        return "0";
    }
    if  (input === 1) {
        return "Beep"
    }
}

Describe: beepBoop();
Test: "It should return string "Boop" if the number 2 is inputted"
Expect(beepBoop(2).toEqual("Boop")); 

function beepBoop(input) {
    if  (input === 0) {
        return "0";
    }
    if  (input === 1) {
        return "Beep"
    }
    if  (input === 2) {
        return "Boop"
    }
}

Describe: beepBoop();
Test: "It should return string "Won't you be my neighbor?" if number 3 is inputted"
Expect(beepBoop(3).toEqual("Won't you be my neighbor?")); 

function beepBoop(input) {
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

Describe: beepBoop();
Test: "It should return a string stating "input is not a number" if user inputs a value other than an integer"
Expect(beepBoop("hello").toEqual("input is not a number")); 

function beepBoop(input) {
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
    if (!Number.isInteger(input)) {
        return "input is not an number";
    }
    
};

Describe: beepBoop();
Test: "It should output the number inputted as a string"
Expect(beepBoop(10).toEqual("10")); 


function beepBoop(input) {
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
    if (!Number.isInteger(input)) {
        return "input is not an number";
    }
    let string = input.toString();
};


Describe: beepBoop();
Test: "It should output 'Won't you be my neighbor?' if user inputs 32"
Expect(beepBoop(32).toEqual("Won't you be my neightbor?")); 

function beepBoop(input) {
   
    if (!Number.isInteger(input)) {
        return "input is not an number";
    }
    let string = input.toString().split('');
    
     if  (string.includes('0')) {
        return "0";
    } if (string.includes('3')) {
        return "Won't you be my neighbor?";
};


Describe: beepBoop();
Test: "It should output 'boop' if user inputs 21"
Expect(beepBoop(21).toEqual("?")); 

function beepBoop(input) {
   
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


Describe: beepBoop();
Test: "It should output 'beep' if user inputs 11"
Expect(beepBoop(11).toEqual("beep")); 

function beepBoop(input) {
   
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
};

Describe: counter();
Test: "It should output an array starting from 0 to the users input value"
Expect(beepBoop(5).toEqual([0,1,2,3,4,5])); 

function range(input) {
    let output = [];
    let count = 0;
    while(count <= input) {
        output.push(count);
        count++
    }
    return output
}

