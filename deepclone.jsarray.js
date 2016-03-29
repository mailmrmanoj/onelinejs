
/**
 *
 * var x = [1,2,3,4,5];
 * var y = x;
 * 
 * In general Array is pass by reference. If you assign array variable x to y, it will not be deep cloned.
 * It is just shallow cloned, meaning if you change the value of  x, it will change y value also and vice versa.
 * So this below one liner code will helps to deep clone the array.
 *
 *
 * Usage:
 * var x = [1,2,3,4,5];
 * var y = DeepcloneArray(x);
 * 
 */


function DeepcloneArray(arr){
	return JSON.parse(JSON.stringify(arr));
}
