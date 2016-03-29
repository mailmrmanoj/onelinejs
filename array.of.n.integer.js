/**
 * Generate array of initeger for 1 to n given in the param.
 *
 * Usage:
 *
 * var x = GenerateIntegerArray(10) => [1,2,3,4,5,6,7,8,9,10]
 * 
 */

function GenerateIntegerArray(n){
	return Array(n).fill(0).map(function(i, id){return id+1;})
}