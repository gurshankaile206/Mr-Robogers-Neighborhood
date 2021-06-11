
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
Expect(beepBoop("hello").toEqual(" ?")); 