/**
	A suite of random elements used for randomizing.
	@author laifrank2002
	@date 2019-12-29
 */
var Random = {
	/**
		Picks a random element from an array.
		@param the array in question
		@return element - a random element in the array 
		@author laifrank2002
		@date 2019-12-29
	 */
	elementInArray: function(array)
	{
		var index = Random.integer(0,array.length);
		return array[index];
	},
	/**
		Random integer generator.
		@param the lower boundary (inclusive)
		@param the upper boundary (exclusive)
		@return int - a random integer 
		@author laifrank2002
		@date 2019-12-29
	 */
	integer: function(min, max)
	{
		return Math.floor(Random.number(min,max));
	},
	/**
		Random number generator.
		@param the lower boundary (inclusive)
		@param the upper boundary (exclusive, due to inherent properties of Math.random())
		@return number - a random number 
		@author laifrank2002
		@date 2019-12-29
	 */
	number: function(min, max)
	{
		return (Math.random() * (max - min)) + min;
	},
}