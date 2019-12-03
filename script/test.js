/**
	Bundles together tests for simplifying processing 
	- Summarizes test pass fail rates for human display.
	- Note to the enterprising player who decides to open up the code: tests CAN BE DESTRUCTIVE. 
	- These are run in integrated object scenarios, where StateManager is automatically included in any such system.
	@author laifrank2002
	@date 2019-12-02
 */
var TestingManager = (
	function()
	{
		var tests = [];
		
		/**
			Wraps a test to make it easier to write tests 
			- checks a test result against a specific expected value
			@param name - a descriptive name for what the test tests for 
			@param test - a function that when run, returns a specific output value 
			@param expected - the expected value to be used
			@author laifrank2002
			@date 2019-12-02
		 */
		function Test(name, test, expected)
		{
			this.name = name;
			this.test = test;
			this.expected = expected;
		}
		
		/**
			Runs the test and checks if the output value is the same as the expected value.
			@return boolean - if the test passes or not
			@author laifrank2002
			@date 2019-12-02
		 */
		Test.prototype.run = function()
		{
			var output = this.test();
			if(output === this.expected)
			{
				Engine.log(`passed: ${this.name}`);
				return true;
			}
			Engine.log(`failed: ${this.name}`);
			Engine.log(`	output: ${JSON.stringify(output)}`);
			return false;
		}
		
		return {
			/**
				Runs all the tests and aggregates results
				- logs results to the console
				@author laifrank2002
				@date 2019-12-02
			 */
			runTests: function()
			{
				var totalTestCount = tests.length;
				var passedTestCount = 0;
				
				Engine.log(`Testing everything! Running a total of ${totalTestCount} tests.`);
				
				tests.forEach(test => 
				{
					if(test.run())
					{
						passedTestCount++;
					}
				});
				
				Engine.log(`Testing complete. ${passedTestCount}/${totalTestCount} passed, which is a success rate of ${(100 * passedTestCount/totalTestCount).toFixed(2)}%.`);
			},
			
			/**
				Adds and creates a new test 
				@param name - a descriptive name for what the test tests for 
				@param test - a function that when run, returns a specific output value 
				@param expected - the expected value to be used
				@author laifrank2002
				@date 2019-12-02
			 */
			addTest: function(name, test, expected)
			{
				tests.push(new Test(name, test, expected));
			},
		}
	}
)();

