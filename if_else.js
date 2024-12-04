/**
 * if else 
 */
const numbOfLegs = 4;
const numberOfLegsIHave = 2;


if ( numbOfLegs > numberOfLegsIHave) {
    console.log("im humanoid or human")
    //if true, this code block will execute
} else if (numberOfLegsIHave === numbOfLegs) {
    console.log("im dog")
    //if true this code block execute  
} else {
    console.log("im spider")
    //if nothing above, was true, then this will execute
}