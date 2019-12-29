/**
	Wrapper function for the people in the world.
	- provides aggregate statistics
	- gets a specific person by key, and keeps track of keys
	- adds in a new person into the world!!! and kills them when it's their time to go.
	- ages up people
	- when loading people, validates that they are all correct, otherwise sets uninitialized fields to default values 
	@author laifrank2002
	@date 2019-12-02
 */
var PersonManager = {
	
	key: 1,
	
	get people() { return StateManager.getState("world","people") },
	
	/* Aggregate Utility */
	
	/**
		Adds a person to the big ol' list of persons (also known as people).
		@param ?person - a person to be added 
		@author laifrank2002
		@date 2019-12-02
	 */
	addPerson: function(person = new Person(PersonManager.key++))
	{
		PersonManager.people[person.key] = person;
		return person;
	},
	
	/**
		Checks if a person is contained within.
		@param person - the person to be checked against
		@return boolean - if the person is placed in the world 
		@author laifrank2002
		@date 2019-12-29
	 */
	containsPerson: function(person)
	{
		var people = this.people;
		for(var key in people)
		{
			if(people[key] === person) return true;
		}
		return false;
	},
	
	/**
		Gets a person by their key.
		@param key - the key of the person
		@return person - the person, or undefined if there are none people
		@author laifrank2002
		@date 2019-12-02
	 */
	getPersonByKey: function(key)
	{
		return PersonManager.people[key];
	},
	
	/**
		Removes a person. Note, this is NOT killing a person. This is pruning them in order to save on saving/loading
		@param person - the person themselves
		@return boolean - if the operation was successful or not, usually because the person does not exist already
		@author laifrank2002
		@date 2019-12-02
	 */
	removePerson: function(person)
	{
		if(person)
		{
			return PersonManager.removePersonByKey(person.key);
		}
	},
	
	/**
		Removes a person by their key.
		@param key - the key of the person
		@return boolean - if the operation was successful or not, usually because the person does not exist already
		@author laifrank2002
		@date 2019-12-02
	 */
	removePersonByKey: function(key)
	{
		if(PersonManager.getPersonByKey(key))
		{
			return delete PersonManager.people[key];
		}
		else 
		{
			return false;
		}
	},
	
	/* Specific Utility */
	
	/**
		Ages a person up by one year.
		INCLUDES SIDE EFFECTS! In fact, this is built specifically to deal with all the side effects!
		@param person - the person to age up 
		@return age - the new age of the person 
		@author laifrank2002
		@date 2019-12-10
	 */
	agePerson: function(person)
	{
		if(person)
		{
			return ++person.age;
		}
	},
}
