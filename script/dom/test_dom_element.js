/**
	TESTS SHOULD NOT BE RUN BY THEMSELVES. THESE ARE INTEGRATED TESTS.
	Testing the DOM elements, testing all components.
	Manager tested in separate unit.
	@author laifrank2002
	@date 2019-12-29
 */
var TestDOMElement = (
	function()
	{
		Engine.log("Adding tests for DOMElement...");
		
		var div = new DOMElement('div');
		var p = new DOMElement('p');
		
		/*
			Tests the function DOMElement.appendChild(element) by appending, 
			then check if the element shows up in its children, 
			which should be the same as the appendedElement.
			@author laifrank2002
			@date 2019-12-05
		 */
		function TestAppendChild()
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
		function TestRemoveChild()
		{
			div.removeChild(p);
			return div.element.children[0];
		}
		
		/*
			Tests DOMElement.addClass(className) 
			@author laifrank2002
			@date 2019-12-05
		 */
		function TestAddClass()
		{
			div.addClass("test");
			return div.containsClass("test");
		}
		
		/*
			Tests DOMElement.removeClass(className) 
			@author laifrank2002
			@date 2019-12-05
		 */
		function TestRemoveClass()
		{
			div.removeClass("test");
			return div.containsClass("test");
		}
		
		/*
			Tests DOMElement.toggleClass(className) 
			Dependant on removEClass
			@author laifrank2002
			@date 2019-12-05
		 */
		function TestToggleClass()
		{
			div.removeClass("test2");
			div.toggleClass("test2");
			return div.containsClass("test2");
		}
		
		/*
			Tests DOMElement.containsClass(className) by comparing with ClassList directly 
			@author laifrank2002
			@date 2019-12-05
		 */
		function TestContainsClass()
		{
			div.addClass("test2");
			return div.containsClass("test2");
		}
		
		TestingManager.addTest("TestDOMElementAppendChild",TestAppendChild,p.element);
		TestingManager.addTest("TestDOMElementRemoveChild",TestRemoveChild,undefined);
		TestingManager.addTest("TestDOMElementAddClass",TestAddClass,true);
		TestingManager.addTest("TestDOMElementRemoveClass",TestRemoveClass,false);
		TestingManager.addTest("TestDOMElementToggleClass",TestToggleClass,true);
		TestingManager.addTest("TestDOMElementContainsClass",TestContainsClass,true);
	}
);