/**
	The beating heart of every project.
	- Initializes all the other modules
	- Provides base utility functions that don't fit in other modules 
	@author laifrank2002
	@date 2019-12-02
 */
var Engine = (
	function()
	{
		return {
			/**
				Initializes all the other modules 
				@author laifrank2002
				@date 2019-12-02
			 */
			initialize: function()
			{
				Engine.log("Initializing Engine...");
				StateManager.initialize();
				
				// Adding tests 
				TestPersonManager.initialize();
			},
			
			/**
				Logs a message if logging is enabled.
				Quick way to switch between production and development 
				(other than removing all the Engine.logs using ctrl-f replace)
				@param message the message to be logged (can be non-string)
				@author laifrank2002
				@date 2019-12-02
			 */
			log: function(message)
			{
				console.log(message);
			},
		}
	}
)();
