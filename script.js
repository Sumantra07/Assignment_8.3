/*
 *
 * function to print table ( upto 10) of a particular number
 * 
 * 
 */
function tablePrinter(num) {

    // if number is 0
    if (num < 1) {
        console.log("invalid number")
    }
    else {
        // loop from number starting from 1 to 10 and print the result
        for (var i = 1; i <= 10; i++) {
            console.log(num + " * " + i + " = " + num * i);

        }
    }
}
    tablePrinter(1);

