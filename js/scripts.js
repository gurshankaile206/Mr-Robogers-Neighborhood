// Business logic

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

