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
			
			Note, that if the same value is repeated, this test will FAIL. 
			author laifrank2002
			@date 2020-01-02
		 */
		function TestRemoveElement()
		{
			var testArray = ["me","que","testing","154"];
			ArrayUtilities.removeElement(testArray, "me");
			return testArray.indexOf("me");
		}
		
		TestingManager.addTest("TestArrayUtilitiesRemoveElement", TestRemoveElement, -1);
	}
);