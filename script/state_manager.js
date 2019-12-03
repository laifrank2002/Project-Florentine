/**
	Stores all player based data. 
	- Stores values (or datums) for all user related data 
	- Modifies said datums 
	- Listens for changes to those values, and triggers certain actions because of that
	Meant to be expensive in operations. Use sparingly.
	@author laifrank2002
	@date 2019-12-02
 */
var StateManager = (
	function()
	{
		var data = {};
		var listeners = [];
		
		/**
			Listens for a certain datum to see if it is changed. 
			If it is, an action is triggered with the new value of the datum as a parameter.
			@param name - key
			@param category - datum category 
			@param id - datum key in category 
			@param action - function to be called with new value of datum as parameter
			@author laifrank2002
			@date 2019-12-02
		 */
		function StateListener(name,category,id,action)
		{
			this.name = name;
			this.category = category;
			this.id = id;
			this.action = action;
		}
		
		/**
			Checks if it is the correct datum, then triggers the action with the new changed value.
			@param category - datum category 
			@param id - datum key in category 
			@param value - the new value for the datum
			@author laifrank2002
			@date 2019-12-02
		 */
		StateListener.prototype.trigger = function(category,id,value)
		{
			if(category === this.category && id === this.id)
			{
				this.action(value);
			}
		}
		
		return {
			get data() {return data},
			
			/**
				Initializes the module.
				- Creates all of the data categories 
				- Assigns values to them so that the modules can use them
				@author laifrank2002
				@date 2019-12-02
			 */
			initialize: function()
			{
				Engine.log("Initializing StateManager...");
				/* takes the categories and initializes them */
				data["world"] = { 
					people: {},
				};
				
				// temp until saving and loading is figured out 
				StateManager.startNewGame();
			},
			
			/**
				Populates the data with default values in order to start a new game.
				@author laifrank2002
				@date 2019-12-02
			 */
			startNewGame: function()
			{
				
			},
			
			/**
				Sets the state of a certain datum.
				@param category - datum category 
				@param id - datum key in category 
				@param value - the new value to be assigned to the datum 
				@author laifrank2002
				@date 2019-12-02
			 */
			setState: function(category,id,value)
			{
				if(data[category])
				{
					data[category][id] = value;
					listeners.forEach(listener => listener.trigger(category,id,value));
				}
				else 
				{
					Engine.log("Set Data: No such category: " + category + " exists.");
				}
			},
			
			/**
				Attempts to add a certain value to non object datums as the new datum.
				@param category - datum category 
				@param id - datum key in category 
				@param value - the value to be added to the existing datum
				@author laifrank2002
				@date 2019-12-02
			 */
			addState: function(category,id,value)
			{
				if(data[category])
				{
					if(typeof data[category][id] !== "object")
					{
						StateManager.setState(category,id
							,StateManager.getState(category,id) + value);
					}
				}
				else 
				{
					Engine.log("Add Data: No such category: " + category + " exists.");
				}
			},
			
			/**
				Gets a certain datum by category and id.
				@param category - datum category 
				@param id - datum key in category 
				@author laifrank2002
				@date 2019-12-02
			 */
			getState: function(category,id)
			{
				if(data[category])
				{
					return data[category][id];
				}
				else 
				{
					Engine.log("Get Data: No such category: " + category + " exists.");
				}
			},
			
			/**
				Adds a listener to a certain datum by key.
				Note, no two listeners should have the same name. 
				@param name - key
				@param category - datum category 
				@param id - datum key in category 
				@param action - function to be called with new value of datum as parameter
				@author laifrank2002
				@date 2019-12-02
			 */
			addListener: function(name,category,id,action)
			{
				listeners.push(new StateListener(name,category,id,action));
			},
			
			/**
				Removes a listener by key.
				Note, fails silently 
				@param name - key of the listener
				@return boolean - if a listener was successfully removed
				@author laifrank2002
				@date 2019-12-02
			 */
			removeListener: function(name)
			{
				var listenerRemoved = false;
				listeners = listeners.filter(listener => 
				{
					if(listener.name === name) listenerRemoved = true;
					return listener.name !== name
				});
				return listenerRemoved;
			},
			
		}
	}
)();