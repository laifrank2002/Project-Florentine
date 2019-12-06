/**
	A thinking person. Has some sort of agency. Not always.
	@author laifrank2002
	@date 2019-12-02
 */
function Person(key = PersonManager.key++)
{
	this.key = key;
	Object.assign(this, Person.prototype.DEFAULTS);
}

Person.prototype.DEFAULTS = 
{
	hitpoints: 10,
	health: 1.0,
	fatigue: 0.0,
	traits: ["human"],
	inventory: [],
	dead: false,
};

Person.prototype.TRAIT_LIST = {
	"human": 
	{
		"name": "Human",
		"description": "A human being. Nothing special.",
	}
}

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
	
	/**
		Adds a person to the big ol' list of persons (also known as people).
		@param ?person - a person to be added 
		@author laifrank2002
		@date 2019-12-02
	 */
	addPerson: function(person = new Person(key++))
	{
		PersonManager.people[person.key] = person;
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
}

/**
	TESTS SHOULD NOT BE RUN BY THEMSELVES. THESE ARE INTEGRATED TESTS.
	All the tests for PersonManager in one big integrated pile.
	We do this because it's a manager! And managers affect the world!
	Jokes on you if the world ain't working.
	@author laifrank2002
	@date 2019-12-05
 */
var TestPersonManager = (
	function()
	{

		Engine.log("Adding tests for PersonManager...");
		// setup
		var person1 = new Person();
		PersonManager.addPerson(person1);
		var person2 = new Person();
		PersonManager.addPerson(person2);
		
		/*
			Tests the function PersonManager.getPersonByKey(key) by comparing known vs result references
			@author laifrank2002
			@date 2019-12-02
		 */
		function TestPersonManagerGetPersonByKey()
		{
			return PersonManager.getPersonByKey(person1.key);
		}
		
		/*
			Tests the function PersonManager.removePerson(person) by removing a person, and then testing if we can still get it.
				relies on the previous testing PersonManager.getPersonByKey(key) to work
			@author laifrank2002
			@date 2019-12-02
		 */
		function TestPersonManagerRemovePerson()
		{
			PersonManager.removePerson(person2);
			return PersonManager.getPersonByKey(person2.key);
		}
		
		/*
			Tests the function PersonManager.removePerson(key) by removing a person by key, and then testing if we can still get it.
				relies on the previous testing PersonManager.getPersonByKey(key) to work
			@author laifrank2002
			@date 2019-12-02
		 */
		function TestPersonManagerRemovePersonByKey()
		{
			PersonManager.removePersonByKey(person1.key);
			return PersonManager.getPersonByKey(person1.key);
		}
		
		// tests 
		TestingManager.addTest("TestPersonManagerGetPersonByKey", TestPersonManagerGetPersonByKey, person1);
		TestingManager.addTest("TestPersonManagerRemovePerson", TestPersonManagerRemovePerson, undefined);
		TestingManager.addTest("TestPersonManagerRemovePersonByKey", TestPersonManagerRemovePersonByKey, undefined);
			
	}
);