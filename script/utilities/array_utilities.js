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
	
	/** 
		Removes an element by index.
		@param array - the array 
		@param index - the index of the element to be removed. Any more or less is normalized.
		@author laifrank2002
		@date 2020-01-03
	 */
	removeElementByIndex(array, index)
	{
		array.splice(index, 1);
	},
	
	/**
		Inserts an element in the array at the specified index.
		If the index is too large or too small, it'll be disregarded and conformed to standard array range.
		There is no return for success because the operation will always be successful. If not, please contact me.
		@param array - the array 
		@param element - the element to insert 
		@param index - the index to insert at, values less than 0 or more than .length will be normalized.
		@author laifrank2002
		@date 2020-01-03
	 */
	insertElement(array, element, index)
	{
		array.splice(index, 0, element);
	},
}