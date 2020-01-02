/**
	A series of useful tools to help us with manipulating arrays.
	Additional tools not building arrays themselves, regretfully.
 */
var ArrayUtilities = {
	
	/**
		Removes an element in the array.
		@param array - the array 
		@param element - the element to remove
		@return boolean - the operation was successful or not; if not, usually, it's due to the element not existing.
		@author laifrank2002
		@date 2020-01-02
	 */
	removeElement(array, element)
	{
		for(var index = 0; index < array.length; index++)
		{
			if(array[index] === element)
			{
				array.splice(index, 1);
				return true;
			}
		}
		return false;
	},
	
}