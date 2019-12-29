/**
	A suite of random elements used for randomizing. Tests the random suite
			by running it thousands of times in order to determine that results are expected.
	@author laifrank2002
	@date 2019-12-29
 */
var TestRandom = (
	function()
	{
		Engine.log("Adding tests for Random...");
		// setup 
		var testArray = ["zero","one","two","three","four","five"];

		var range = {min:50, max: 159};
		var repeatTimes = 1000;
		/*
			Tests the function Random.elementInArray(array)
			@author laifrank2002
			@date 2019-12-29
		 */
		function TestElementInArray()
		{
			return Random.elementInArray(testArray);
		}
		
		/*
			Tests the function Random.integer(min,max)
			@author laifrank2002
			@date 2019-12-29
		 */
		function TestInteger()
		{
			return Random.integer(range.min,range.max);
		}
		
		/*
			Tests the function Random.number(min,max)
			@author laifrank2002
			@date 2019-12-29
		 */
		function TestNumber()
		{
			return Random.number(range.min,range.max);
		}
		
		TestingManager.addTest("TestRandomElementInArray",TestElementInArray,testArray,"assertContains",repeatTimes);
		TestingManager.addTest("TestRandomInteger",TestInteger,range,"assertWithinRange",repeatTimes);
		TestingManager.addTest("TestRandomNumber",TestNumber,range,"assertWithinRange",repeatTimes);
	}
);