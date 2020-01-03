/**
	Integrated tests for ArrayUtilities 
	@author laifrank2002
	@date 2020-01-02
 */
var TestArrayUtilities = (
	function()
	{
		Engine.log("Adding tests for ArrayUtilities...");
		
		/*
			Tests the function ArrayUtilities.removeElement(array, element) by using a test array with values, then checking if the element can still be found in the array.
			
			Note, that if the same value is repeated in an array, this test will FAIL. 
			@author laifrank2002
			@date 2020-01-02
		 */
		function TestRemoveElement()
		{
			var testArray = ["me","que","testing","154"];
			ArrayUtilities.removeElement(testArray, "me");
			return testArray.indexOf("me");
		}
		
		/*
			Tests the function ArrayUtilities.removeElementByIndex(array, element, index) by creating a test array, removing an element, and checking if it's the right element removed.
			
			@author laifrank2002
			@date 2020-01-03
		 */
		function TestRemoveElementByIndex()
		{
			var testArray = ["me","que","testing","154"];
			ArrayUtilities.removeElementByIndex(testArray, 2);
			return testArray.indexOf("testing");
		}
		
		/*
			Tests the function ArrayUtilities.insertElement(array, element, index) by using a test array with values, then seeing if the element is inserted in the right place.
			@author laifrank2002
			@date 2020-01-03
		 */
		function TestInsertElement()
		{
			var testArray = ["me","que","testing","154"];
			ArrayUtilities.insertElement(testArray, "five", 3);
			return testArray[3];
		}
		
		TestingManager.addTest("TestArrayUtilitiesRemoveElement", TestRemoveElement, -1);
		TestingManager.addTest("TestArrayUtilitiesRemoveElementByIndex", TestRemoveElementByIndex, -1);
		TestingManager.addTest("TestArrayUtilitiesInsertElement", TestInsertElement, "five");
	}
);