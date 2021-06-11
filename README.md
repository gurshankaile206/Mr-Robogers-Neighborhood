
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

Describe: beepBoop();
Test: "It should return string "Boop" if the number 2 is inputted"
Expect(beepBoop(2).toEqual("Boop")); 

Describe: beepBoop();
Test: "It should return string "Won't you be my neighbor?" if number 3 is inputted"
Expect(beepBoop(3).toEqual("Won't you be my neighbor?")); 