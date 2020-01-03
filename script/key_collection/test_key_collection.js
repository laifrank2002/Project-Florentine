/**
	Testing a standard key collection, made up of key elements.
	@author laifrank2002 
	@date 2020-01-03
 */
var TestKeyCollection = (
	function()
	{
		Engine.log("Adding tests for KeyCollection...");
		var testElement1 = new KeyElement(0);
		var testElement2 = new KeyElement(1);
		var testElement3 = new KeyElement(2);
		var testElement4 = new KeyElement(3);
		
		/*
			Tests the function KeyCollection.addElement(element) by adding an element, then seeing if it's contained within.
			@author laifrank2002 
			@date 2020-01-03
		 */
		function TestAddElement()
		{
			var testKeyCollection = new KeyCollection();
			testKeyCollection.addElement(testElement1);
			return testKeyCollection.containsElement(testElement1);
		}
		
		/*
			Tests the function KeyCollection.insertElement(element, index) by creating a test array, inserting a new element, then seeing if the new elements index is correct.
			@author laifrank2002 
			@date 2020-01-03
		 */
		function TestInsertElement()
		{
			var testKeyCollection = new KeyCollection();
			testKeyCollection.addElement(testElement1);
			testKeyCollection.addElement(testElement2);
			testKeyCollection.addElement(testElement3);
			testKeyCollection.insertElement(testElement4,1);
			return testKeyCollection.getIndexOfElement(testElement4);
		}
		
		/* 
			Tests the function KeyCollection.containsElement(element) by adding an element, which should return true.
			@author laifrank2002 
			@date 2020-01-03 
		 */
		function TestContainsElement()
		{
			var testKeyCollection = new KeyCollection();
			testKeyCollection.addElement(testElement1);
			return testKeyCollection.containsElement(testElement1);
		}
		
		/* 
			Tests the function KeyCollection.containsElementByKey(key) by adding an element, which should return true.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestContainsElementByKey()
		{
			var testKeyCollection = new KeyCollection();
			testKeyCollection.addElement(testElement1);
			return testKeyCollection.containsElementByKey(testElement1.key);
		}
	
		/*
			Tests the function KeyCollection.getElementByKey(key) by adding an element, and seeing if it returns the same one.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestGetElementByKey()
		{
			var testKeyCollection = new KeyCollection();
			testKeyCollection.addElement(testElement1);
			return testKeyCollection.getElementByKey(testElement1.key);
		}		
		
		/*
			Tests the function KeyCollection.getElementByIndex(index) by adding a few items, then checking if the item at the location is correct. 
			@author laifrank2002
			@date 2020-01-03
		 */
		function TestGetElementByIndex()
		{
			var testKeyCollection = new KeyCollection();
			testKeyCollection.addElement(testElement1);
			testKeyCollection.addElement(testElement2);
			testKeyCollection.addElement(testElement3);
			testKeyCollection.addElement(testElement4);
			return testKeyCollection.getElementByIndex(1);
		}
		
		/*
			Tests the function KeyCollection.getIndexOfElement(element) by creating a test array and then seeing if the index is in the right order.
			@author laifrank2002 
			@date 2020-01-03
		 */
		function TestGetIndexOfElement()
		{
			var testKeyCollection = new KeyCollection();
			testKeyCollection.addElement(testElement1);
			testKeyCollection.addElement(testElement2);
			testKeyCollection.addElement(testElement3);
			testKeyCollection.addElement(testElement4);
			return testKeyCollection.getIndexOfElement(testElement2);
		}
		
		/*
			Tests the function KeyCollection.getIndexOfElementByKey(key) by creating a test array, and then seeing if the index is in the right location.
			@author laifrank2002 
			@date 2020-01-03
		 */
		function TestGetIndexOfElementByKey()
		{
			var testKeyCollection = new KeyCollection();
			testKeyCollection.addElement(testElement1);
			testKeyCollection.addElement(testElement2);
			testKeyCollection.addElement(testElement3);
			testKeyCollection.addElement(testElement4);
			return testKeyCollection.getIndexOfElementByKey(testElement2.key);
		}
		
		/*
			Tests the function KeyCollection.getLength() by creating a test array filled with N elements, then seeing if the length is N.
			@author laifrank2002 
			@date 2020-01-03
		 */
		function TestGetLength()
		{
			var testKeyCollection = new KeyCollection();
			testKeyCollection.addElement(testElement1);
			testKeyCollection.addElement(testElement2);
			testKeyCollection.addElement(testElement3);
			testKeyCollection.addElement(testElement4);
			return testKeyCollection.getLength();
		}
		
		/* 
			Tests the function removeElement(element) by adding then removing an element, then seeing if it's still there.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestRemoveElement()
		{
			var testKeyCollection = new KeyCollection();
			testKeyCollection.addElement(testElement1);
			testKeyCollection.removeElement(testElement1);
			return testKeyCollection.containsElement(testElement1);
		}
		
		/*
			Tests the function removeElementByKey(key) by adding then removing an element, then seeing if it's still there.
			@author laifrank2002 
			@date 2020-01-02
			
		 */
		function TestRemoveElementByKey()
		{
			var testKeyCollection = new KeyCollection();
			testKeyCollection.addElement(testElement1);
			testKeyCollection.removeElementByKey(testElement1.key);
			return testKeyCollection.containsElement(testElement1);
		}
		
		/*
			Tests the functon removeElementByIndex(index) by creating a test array, and then seeing if the right element does no longer exist.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestRemoveElementByIndex()
		{
			var testKeyCollection = new KeyCollection();
			testKeyCollection.addElement(testElement1);
			testKeyCollection.addElement(testElement2);
			testKeyCollection.addElement(testElement3);
			testKeyCollection.addElement(testElement4);
			testKeyCollection.removeElementByIndex(1);
			return testKeyCollection.containsElement(testElement2);
		}
		
		// tests 
		TestingManager.addTest("TestKeyCollectionAddElement",TestAddElement, true);
		TestingManager.addTest("TestKeyCollectionInsertElement", TestInsertElement, 1);
		TestingManager.addTest("TestKeyCollectionContainsElement",TestContainsElement, true);
		TestingManager.addTest("TestKeyCollectionContainsElementByKey",TestContainsElementByKey, true);
		TestingManager.addTest("TestKeyCollectionGetElementByKey",TestGetElementByKey, testElement1);
		TestingManager.addTest("TestKeyCollectionGetElementByIndex",TestGetElementByIndex, testElement2);
		TestingManager.addTest("TestKeyCollectionGetIndexOfElement", TestGetIndexOfElement, 1);
		TestingManager.addTest("TestKeyCollectionGetIndexOfElementByKey", TestGetIndexOfElementByKey, 1);
		TestingManager.addTest("TestKeyCollectionGetLength", TestGetLength, 4);
		TestingManager.addTest("TestKeyCollectionRemoveElement",TestRemoveElement, false);
		TestingManager.addTest("TestKeyCollectionRemoveElementByKey",TestRemoveElementByKey, false);
		TestingManager.addTest("TestKeyCollectionRemoveElementByIndex", TestRemoveElementByIndex, false);
	}
);