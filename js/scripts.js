// Business logic

function beepBoop(input) {
    if (!Number.isInteger(input)) {
        return "input is not an number";
    }
    let string = input.toString().split('');
    if  (string.includes('0')) {
        return "0";
    } if (string.includes('3')) {
        return "Won't you be my neighbor?";
    }
};
