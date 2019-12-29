/**
	A wrapper used to call DOM functions 
	This allows us to control the flow and to save code in other elements.
	Usually not used by itself.
	The resultant tag is going to be completely blank. Perfect for testing.
	@param tag - the HTML tag that is wanted to be created
	@author laifrank2002
	@date 2019-12-05
 */
function DOMElement(tag)
{
	this.element = document.createElement(tag);
}

/**
	Saves us a line of code when appending elements, appends directly to element of wrapper.
	@param element - the potential child to append, must be another DOMElement
	@author laifrank2002
	@date 2019-12-05
 */
DOMElement.prototype.appendChild = function(element)
{
	this.element.appendChild(element.element);
}

/**
	Removes a specific element as child from the element 
	@param element - the child to remove, must be another DOMElement
	@author laifrank2002
	@date 2019-12-05
 */
DOMElement.prototype.removeChild = function(element)
{
	this.element.removeChild(element.element);
}

/**
	Takes this element and removes if from its parent, if applicable.
	When we aren't sure who the parent is, but we still don't want the child anymore.
	This is a catch-all to just delete it. Usually for anonymous elements (remove self such as notifications)
	@author laifrank2002
	@date 2019-12-05
 */
DOMElement.prototype.remove = function()
{
	if(this.element.parentElement)
	{
		this.element.parentElement.removeChild(this.element);
	}
}
 
/**
	Adds a class to the classList 
	@param className - the class to be added 
	@author laifrank2002
	@date 2019-12-05
 */
DOMElement.prototype.addClass = function(...className)
{
	this.element.classList.add(...className);
}

/**
	Removes a class from the classList 
	@param className - the class to be removed  
	@author laifrank2002
	@date 2019-12-05
 */
DOMElement.prototype.removeClass = function(...className)
{
	this.element.classList.remove(...className);
}

/**
	Checks if a single class is contained in classList 
	@param className - the class to be checked 
	@author laifrank2002
	@date 2019-12-05
 */
DOMElement.prototype.containsClass = function(className)
{
	return this.element.classList.contains(className);
}

/**
	Tries to toggle a class. If already contained, removes it, and if not, then add it. 
	@param className - the class to be toggled  
	@author laifrank2002
	@date 2019-12-05
 */
DOMElement.prototype.toggleClass = function(className)
{
	this.element.classList.toggle(className);
}