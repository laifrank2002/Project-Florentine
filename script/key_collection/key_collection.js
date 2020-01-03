/**
	A key collection is basically a fancy array which holds a collection of elements as defined by their keys.
	@author laifrank2002 
	@date 2020-01-03
 */
function KeyCollection()
{
	this.elements = [];
}

/**
	Adds an element to the collection if it doesn't already exist.
	@param element - the element in question
	@return boolean - if the element is successful or not 
	@author laifrank2002 
	@date 2020-01-03
 */
KeyCollection.prototype.addElement = function(element)
{
	// check first if we already got the key
	if(this.containsElementByKey(element.key)) return false;
	this.elements.push(element);
	return true;
}

/**
	Inserts an element somewhere within the array.
	@param element - the element in question
	@param index - the index of the element in question 
	@return boolean - if the operation was successful or not.
	@author laifrank2002 
	@date 2020-01-03
 */
KeyCollection.prototype.insertElement = function(element, index)
{
	// check first if we already got the key
	if(this.containsElementByKey(element.key)) return false;
	ArrayUtilities.insertElement(this.elements, element, index);
	return true;
}
 
/**
	Checks if the collection already contains such an element.
	@param element - the element in question 
	@return boolean - if the element is found in the collection
	@author laifrank2002 
	@date 2020-01-03
 */
KeyCollection.prototype.containsElement = function(element)
{
	// a note on object properties - using this.elements means that we'll have to find the same key N times, over and over again. So we keep a reference.
	var collection = this.elements;
	for(var index = 0; index < collection.length; index++)
	{
		if(collection[index] === element) return true;
	}
	return false;
}

/**
	Checks if the collection already has an element with the same key. 
	There is a distinct difference here in terms of horribly-hard-to-detect errors.
	@param key - the key to check for 
	@return boolean - if the key is in the collection
	@author laifrank2002 
	@date 2020-01-03
 */
KeyCollection.prototype.containsElementByKey = function(key)
{
	var collection = this.elements;
	for(var index = 0; index < collection.length; index++)
	{
		if(collection[index].key === key) return true;
	}
	return false;
}
 
/**
	Finds and returns an element with the same key as in the collection, or null if there isn't one 
	@param key - the key to match 
	@return KeyElement - the element matching, or null if there's no such element 
	@author laifrank2002 
	@date 2020-01-03
 */
KeyCollection.prototype.getElementByKey = function(key)
{
	var collection = this.elements;
	for(var index = 0; index < collection.length; index++)
	{
		if(collection[index].key === key) return collection[index];
	}
	return null;
}

/**
	Gets the element at a selected index, null otherwise.
	@param index - the index thereof 
	@return item - the item, or null otherwise. 
	@author laifrank2002
	@date 2020-01-03
 */
KeyCollection.prototype.getElementByIndex = function(index)
{
	return this.elements[index];
}

/**
	Gets the index of an element within the collection.
	@param element - the element to find 
	@return index - the index, or -1 if it can't be found 
	@author laifrank2002 
	@date 2020-01-03
 */ 
KeyCollection.prototype.getIndexOfElement = function(element)
{
	return this.elements.indexOf(element);
}
 
/**
	Gets the index of a key within the collection.
	@param key - the key to find 
	@return index - the index, or -1 if it can't be found 
	@author laifrank2002 
	@date 2020-01-03
 */ 
KeyCollection.prototype.getIndexOfElementByKey = function(key)
{
	var collection = this.elements;
	for(var index = 0; index < collection.length; index++)
	{
		if(collection[index].key === key) return index;
	}
	return -1;
}
 
/**
	Gets the length of the collection.
	@return length - the length of the collection 
	@author laifrank2002 
	@date 2020-01-03
 */ 
KeyCollection.prototype.getLength = function()
{
	return this.elements.length;
}
 
/**
	Removes an element from the collection.
	@param key - the element in question 
	@return boolean - if the operation is successful or not 
	@author laifrank2002 
	@date 2020-01-03
 */
KeyCollection.prototype.removeElement = function(element)
{
	return ArrayUtilities.removeElement(this.elements, element);
}
 
/**
	Removes the element matching the key from the collection.
	@param key - the key in question
	@return boolean - if the operation is sucessful or not
	@author laifrank2002 
	@date 2020-01-03
 */
KeyCollection.prototype.removeElementByKey = function(key)
{
	var element = this.getElementByKey(key);
	if(element)
	{
		return ArrayUtilities.removeElement(this.elements, element);
	}
	return false;
}

/**
	Removes an element from the collection at the specified location.
	@param index - the index to remove from, invalid ones will be normalized.
	@return boolean - if the operation is successful or not.
	@author laifrank2002 
	@date 2020-01-03
 */ 
KeyCollection.prototype.removeElementByIndex = function(index)
{
	if(index > -1 && index < this.getLength())
	{
		ArrayUtilities.removeElementByIndex(this.elements, index);
		return true;
	}
	return false;
}