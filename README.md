
Describe: beepBoop()
Test: "It should return a string with a 0 if the number 0 is inputted"
Expect(beepBoop(0).toEqual([0]); 

function beepBoop(input) {
    if (input === 0) {
        return "0";
    }
};
