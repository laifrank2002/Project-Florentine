/**
	An inventory is a KeyCollection which has special methods for dealing with the different types of items. It makes life easier - trust me.
	@author laifrank2002 
	@date 2020-01-03
 */
function Inventory(capacity = 0)
{
	KeyCollection.call(this);
	this.capacity = capacity;
}

Inventory.prototype = Object.create(KeyCollection.prototype);
Object.defineProperty(Inventory.prototype, 'constructor', {
	value: Inventory,
	enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });

/**
	NOTICE: DOESN'T CURRENTLY DEAL WITH STACKS.

	Adds an item to the end of the collection.
	No, it SEEMS so simple, but let me tell you, there are many restrictions here.
	It won't insert if we exceed inventory space. That means there are side effects, in that we'll add capacity used. That could be weight, but mostly it's just a hard limit. A capacity of 0 is equivalent to infinity.
	It also collapses and also distributes stacks within our inventory.
	
	@param item - the item in question
	@return boolean - if the operation was successful or not (probably not enough capacity).
	@author laifrank2002
	@date 2020-01-03
 */
Inventory.prototype.addItem = function(item)
{
	if(!(this.getLength() < this.capacity) && this.capacity > 0) return false;
	
	return this.addElement(item);
}

/**
	Inserts an item into the collection at a specified index.
	@param item - the item in question.
	@param index - the index to insert it at 
	@return boolean - if the operation was successful or not (probably not enough capacity).
	@author laifrank2002
	@date 2020-01-03
 */
Inventory.prototype.insertItem = function(item, index)
{
	if(!(this.getLength() < this.capacity) && this.capacity > 0) return false;
	
	return this.insertElement(item, index);
}

/**
	Gets an item by key.
	@param key - the key in question 
	@return item - the item, or null if it doesn't exist in the collection 
	@author laifrank2002
	@date 2020-01-03
 */
Inventory.prototype.getItemByKey = function(key)
{
	return this.getElementByKey(key);
}

/**
	Gets the item at the index.
	@param index - the index in question.
	@author laifrank2002
	@date 2020-01-03
 */
Inventory.prototype.getItemByIndex = function(index)
{
	return this.getElementByIndex(index);
}

/**
	Gets the capacity of this inventory.
	@return capacity - the capacity of this inventory 
	@author laifrank2002
	@date 2020-01-03
 */
Inventory.prototype.getCapacity = function()
{
	return this.capacity;
}

/** 
	Sets the capacity of this inventory.
	@param capacity - a valid number between [0, Infinity)
	@author laifrank2002
	@date 2020-01-03
 */
Inventory.prototype.setCapacity = function(capacity)
{
	if(capacity > -1) this.capacity = capacity;
}

/**
	NOTE, DOESN'T CURRENTLY DEAL WITH STACKS 
	
	Removes an item from this inventory.
	
	Special case for stacks, such that you can remove 30 units of some stack by creating a new stack with 30 units in it.
		
	@param item - the item to remove 
	@return boolean - if the operation was successful or not.
	@author laifrank2002
	@date 2020-01-03
 */
Inventory.prototype.removeItem = function(item)
{
	return this.removeElement(item);
}

/**
	Removes an item by key from this inventory.
	@param key - the key of the item to remove 
	@return boolean - if the operation was successful or not.
	@author laifrank2002
	@date 2020-01-03
 */
Inventory.prototype.removeItemByKey = function(key)
{
	return this.removeElementByKey(key);
}

/**
	Removes an item at a specified index from this inventory.
	@param index - the index of the item to remove 
	@return boolean - if the operation was successful or not.
	@author laifrank2002
	@date 2020-01-03
 */
Inventory.prototype.removeItemByIndex = function(index)
{
	return this.removeElementByIndex(index);
}

/**
	NTOE THIS DOESN'T DEAL WITH STACKS YET 
	
	Checks if this inventory contains an item.
	Exception will be made for stacks.
	@param item - the item to check 
	@return boolean - if it is contained within or not 
	@author laifrank2002
	@date 2020-01-03
 */
Inventory.prototype.containsItem = function(item)
{
	return this.containsElement(item);
}

/**
	Checks if this inventory contains a key.
	Note, due to the nature of stacks, this method should not be used for stacks. Stacks are... a special case.
	@param key - the key to check 
	@return boolean - if it is contained within or not 
	@author laifrank2002
	@date 2020-01-03
 */
Inventory.prototype.containsItemByKey = function(key)
{
	return this.containsElementByKey(key);
}

/**
	Gets the index of a item.
	@param item - the item to check 
	@return index - the index of the key, or -1 if not 
	@author laifrank2002
	@date 2020-01-03
 */
Inventory.prototype.getIndexOfItem = function(item)
{
	return this.getIndexOfElement(item);
}
 
/**
	Gets the index of a key.
	@param key - the key to check 
	@return index - the index of the key, or -1 if not 
	@author laifrank2002
	@date 2020-01-03
 */
Inventory.prototype.getIndexOfItemByKey = function(key)
{
	return this.getIndexOfElementByKey(key);
}