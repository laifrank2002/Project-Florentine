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
			Engine.log(`No such person of key ${key} exists.`);
			return false;
		}
	},
	
	/**
		Adds a trait to a person.
		Prevents duplicates by first searching if it already exists.
		@param person - the person themself 
		@param trait - the key of the trait
		@return boolean - if we were able to add the trait.
		@author laifrank2002
		@date 2020-01-02
	 */
	addTrait: function(person, trait)
	{
		if(PersonManager.hasTrait(person, trait)) return false;
		if(!PersonManager.lookupTrait(trait)) return false;
		
		person.traits.push(trait);
		return true;
	},
	
	/**
		Adds a trait to a person by key.
		Prevents duplicates by first searching if it already exists.
		@param key - the key of the person 
		@param trait - the key of the trait 
		@return boolean - if we were able to add the trait.
		@author laifrank2002
		@date 2020-01-02
	 */
	addTraitByKey: function(key, trait)
	{
		var person = PersonManager.getPersonByKey(key);
		if(person)
		{
			return PersonManager.addTrait(person, trait);
		}
		else 
		{
			Engine.log(`No such person of key ${key} exists.`);
			return false;
		}
	},
	
	/**
		Removes a trait from a person.
		Silently fails if trait doesn't exist from person, or doesn't exist at all.
		@param person - the person 
		@param trait - key of the trait 
		@return boolean - if the operation is successful
		@author laifrank2002
		@date 2020-01-02
	 */
	removeTrait: function(person, trait)
	{
		return ArrayUtilities.removeElement(person.traits, trait);
	},
	
	/**
		Removes a trait from a person by key.
		Silently fails if trait doesn't exist from person, or doesn't exist at all.
		@param key - the key of the person 
		@param trait - key of the trait 
		@return boolean - if the operation is successful 
		@author laifrank2002
		@date 2020-01-02
	 */
	removeTraitByKey: function(key, trait)
	{
		var person = PersonManager.getPersonByKey(key);
		if(person)
		{
			return PersonManager.removeTrait(person, trait);
		}
		else 
		{
			Engine.log(`No such person of key ${key} exists.`);
			return false;
		}
	},
	
	/**
		Checks if a person has a trait.
		@param person - person 
		@param trait - key of the trait
		@return boolean - if the person has the trait 
		@author laifrank2002
		@date 2020-01-02
	 */
	hasTrait: function(person, trait)
	{
		return person.traits.includes(trait);
	},
	
	/**
		Checks if a person by key has a trait.
		@param key - the key of the person 
		@param trait - key of the trait 
		@return boolean - if the person has the trait 
		@author laifrank2002
		@date 2020-01-02
	 */
	hasTraitByKey: function(key, trait)
	{
		var person = PersonManager.getPersonByKey(key);
		if(person)
		{
			return PersonManager.hasTrait(person, trait);
		} 
		else 
		{
			Engine.log(`No such person of key ${key} exists.`);
			return false;
		}
	},
	
	/**
		Lookup a trait by key. 
		@param key of the trait 
		@return Trait - the object containing information about the trait.
		@author laifrank2002
		@date 2019-12-02
	 */
	lookupTrait: function(key)
	{
		return Person.prototype.TRAIT_LIST[key];
	},
}
