/**
 *
 * Reverse the given string
 *
 * Usage:
 * var string = "Javascript";
 *
 * var reverseString = ReverseString(string);  // "tpircsavaJ"
 * 
 */


function ReverseString(string){
	return string.split("").reverse().join("");
}