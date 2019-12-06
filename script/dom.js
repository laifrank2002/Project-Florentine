/**
	The comprehensive solution to messing about with DOM elements.
	Creates custom display elements so that our lives are made much easier.
	@author laifrank2002
	@date 2019-12-04
 */
var DOMManager = (
	function()
	{
		var content = null;
		var elements;
		return {
			/**
				Sets the content to something.
			 */
			initialize: function()
			{
				content = document.createElement("div");
				elements = [];
			},
		}
	}
)();

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

/* Complex components */

function DOMDisplay()
{
	this.element = document.createElement("div");
}

/**
	A number used in displaying numbers. 
	@author laifrank2002
	@date 2019-12-05
 */
function DOMNumber(text = '',value = 0)
{
	this.element = document.createElement("p");
	this.element.appendChild(document.createTextNode(`${text}: `));
	this.number = document.createElement("span");
	this.number.appendChild(document.createTextNode(`${value}`));
	this.element.appendChild(this.number);
}

/**
	TESTS SHOULD NOT BE RUN BY THEMSELVES. THESE ARE INTEGRATED TESTS.
	Testing the DOM elements, testing all components.
	Manager tested in separate unit.
	@author laifrank2002
	@date 2019-12-05
 */
var TestDOM = (
	function()
	{
		Engine.log("Adding tests for DOM...");
		
		var div = new DOMElement('div');
		var p = new DOMElement('p');
		
		/*
			Tests the function DOMElement.appendChild(element) by appending, 
			then check if the element shows up in its children, 
			which should be the same as the appendedElement.
			@author laifrank2002
			@date 2019-12-05
		 */
		function TestDOMElementAppendChild()
		{
			div.appendChild(p);
			return div.element.children[0];
		}
		
		/*
			Tests the function DOMElement.appendChild(element) by removing, 
			then check if the element shows up in its children, 
			which should be nothing.
			@author laifrank2002
			@date 2019-12-05
		 */
		function TestDOMElementRemoveChild()
		{
			div.removeChild(p);
			return div.element.children[0];
		}
		
		/*
			Tests DOMElement.addClass(className) by comparing with ClassList directly 
			@author laifrank2002
			@date 2019-12-05
		 */
		function TestDOMElementAddClass()
		{
			div.addClass("test");
			return div.element.classList[0];
		}
		
		/*
			Tests DOMElement.removeClass(className) by comparing with ClassList directly 
			@author laifrank2002
			@date 2019-12-05
		 */
		function TestDOMElementRemoveClass()
		{
			div.removeClass("test");
			return div.element.classList[0];
		}
		
		/*
			Tests DOMElement.toggleClass(className) by comparing with ClassList directly 
			@author laifrank2002
			@date 2019-12-05
		 */
		function TestDOMElementToggleClass()
		{
			div.toggleClass("test2");
			return div.element.classList[0];
		}
		
		/*
			Tests DOMElement.containsClass(className) by comparing with ClassList directly 
			@author laifrank2002
			@date 2019-12-05
		 */
		function TestDOMElementContainsClass()
		{
			return div.containsClass("test2");
		}
		
		TestingManager.addTest("TestDOMElementAppendChild",TestDOMElementAppendChild,p.element);
		TestingManager.addTest("TestDOMElementRemoveChild",TestDOMElementRemoveChild,undefined);
		TestingManager.addTest("TestDOMElementAddClass",TestDOMElementAddClass,"test");
		TestingManager.addTest("TestDOMElementRemoveClass",TestDOMElementRemoveClass,undefined);
		TestingManager.addTest("TestDOMElementToggleClass",TestDOMElementToggleClass,"test2");
		TestingManager.addTest("TestDOMElementContainsClass",TestDOMElementContainsClass,true);
	}
);