/**
	TESTS SHOULD NOT BE RUN BY THEMSELVES. THESE ARE INTEGRATED TESTS.
	All the tests for PersonManager in one big integrated pile.
	We do this because it's a manager! And managers affect the world!
	Jokes on you if the world ain't working.
	@author laifrank2002
	@date 2020-01-02
 */
var TestPersonManager = (
	function()
	{
		Engine.log("Adding tests for PersonManager...");
		var person1 = new Person();
		var person2 = new Person();
		var person3 = new Person();
		var person4 = new Person();
		var person5 = new Person();
		var person6 = new Person();
		var person7 = new Person();
		var person8 = new Person();
		var person9 = new Person();
		var person10 = new Person();
		var person11 = new Person();
		var person12 = new Person();
		
		/*
			Tests the function PersonManager.addPerson()
			A circular loop, 
				addPerson and containsPerson depend on each other 
				but... that's just friendship!
			@author laifrank2002
			@date 2019-12-29
		 */
		function TestAddPerson()
		{
			PersonManager.addPerson(person4);
			return PersonManager.containsPerson(person4);
		}
		
		/*
			Tests the function PersonManager.containsPerson 
			A circular loop (see above)
			@author laifrank2002
			@date 2019-12-29
		 */
		function TestContainsPerson()
		{
			PersonManager.addPerson(person5);
			return PersonManager.containsPerson(person5);
		}
		
		/*
			Tests the function PersonManager.getPersonByKey(key) by comparing known vs result references
			@author laifrank2002
			@date 2019-12-29
		 */
		function TestGetPersonByKey()
		{
			PersonManager.addPerson(person1);
			return PersonManager.getPersonByKey(person1.key);
		}
		
		/*
			Tests the function PersonManager.removePerson(person) by removing a person, and then testing if we can still get it.
				relies on the previous testing PersonManager.getPersonByKey(key) to work
			@author laifrank2002
			@date 2019-12-29
		 */
		function TestRemovePerson()
		{
			PersonManager.addPerson(person2);
			PersonManager.removePerson(person2);
			return PersonManager.getPersonByKey(person2.key);
		}
		
		/*
			Tests the function PersonManager.removePerson(key) by removing a person by key, and then testing if we can still get it.
				relies on the previous testing PersonManager.getPersonByKey(key) to work
			@author laifrank2002
			@date 2019-12-29
		 */
		function TestRemovePersonByKey()
		{
			PersonManager.addPerson(person3);
			PersonManager.removePersonByKey(person3.key);
			return PersonManager.getPersonByKey(person3.key);
		}
		
		/*
			Tests the function PersonManager.addTrait(person, trait) by seeing if a trait is added in correctly.
			@author laifrank2002 
			@date 2019-01-02
		 */
		function TestAddTrait()
		{
			PersonManager.addTrait(person6, "test");
			return PersonManager.hasTrait(person6, "test");
		}
		
		/*
			Tests the function  PersonManager.addTraitByKey(key, trait) by checking if a trait was added in correctly 
			@author laifrank2002 
			@date 2019-01-02
		 */
		function TestAddTraitByKey()
		{
			PersonManager.addPerson(person7);
			PersonManager.addTraitByKey(person7.key, "test");
			return PersonManager.hasTrait(person7, "test");
		}
		
		/*
			Tests the function PersonManager.removeTrait(person, trait) by first adding the trait in, then removing it, and checking if it's still there.
			@author laifrank2002 
			@date 2019-01-02
		 */
		function TestRemoveTrait()
		{
			PersonManager.addTrait(person8, "test");
			PersonManager.removeTrait(person8, "test");
			return PersonManager.hasTrait(person8,"test");
		}
		
		/*
			Tests the function PersonManager.removeTraitByKey(person, trait) by first adding the trait in, then removing it, and checking if it's still there.
			@author laifrank2002 
			@date 2019-01-02
		 */
		function TestRemoveTraitByKey()
		{
			PersonManager.addPerson(person9);
			PersonManager.addTrait(person9, "test");
			PersonManager.removeTraitByKey(person9.key, "test");
			return PersonManager.hasTrait(person9,"test");
		}
		
		/*
			Tests the function PersonManager.hasTrait(person, trait) by adding in the trait, then checking if it returns true.
			@author laifrank2002 
			@date 2019-01-02
		 */
		function TestHasTrait()
		{
			PersonManager.addTrait(person10, "test");
			return PersonManager.hasTrait(person10, "test");
		}
		
		/*
			Tests the function PresonManager.hasTraitByKey(person, trait) by adding in the trait, then checking if it returns true.
			@author laifrank2002 
			@date 2019-01-02
		 */
		function TestHasTraitByKey()
		{
			
			PersonManager.addPerson(person11);
			PersonManager.addTrait(person11, "test");
			return PersonManager.hasTraitByKey(person11.key, "test");
		}
		
		/*
			Tests the function PersonManager.lookupTrait(key) by checking against a known trait.
			@author laifrank2002 
			@date 2020-01-02 
		 */
		function TestLookupTrait()
		{
			return PersonManager.lookupTrait("test");
		}
		
		/*
			Tests if PersonManager.addTrait(person, trait) will add a non-existant trait. We confirm first that the trait truly is non existent. 
			We shouldn't be able to add a non-existent trait. If so, the default behaviour should be to do nothing and log it.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestCaseAddTraitNonExistentTrait()
		{
			if(PersonManager.lookupTrait("made-up-trait")) throw new Error(`"made-up-trait" exists.`);
			
			PersonManager.addTrait(person12, "made-up-trait");
			return PersonManager.hasTrait(person12, "made-up-trait");
		}
		
		// tests 
		TestingManager.addTest("TestPersonManagerGetPersonByKey", TestGetPersonByKey, person1);
		TestingManager.addTest("TestPersonManagerRemovePerson", TestRemovePerson, undefined);
		TestingManager.addTest("TestPersonManagerRemovePersonByKey", TestRemovePersonByKey, undefined);
		TestingManager.addTest("TestPersonManagerAddPerson", TestAddPerson, true);
		TestingManager.addTest("TestPersonManagerContainsPerson", TestContainsPerson, true);
		
		TestingManager.addTest("TestPersonManagerAddTrait", TestAddTrait, true);
		TestingManager.addTest("TestPersonManagerAddTraitByKey", TestAddTraitByKey, true);
		TestingManager.addTest("TestPersonManagerRemoveTrait", TestRemoveTrait, false);
		TestingManager.addTest("TestPersonManagerRemoveTraitByKey", TestRemoveTraitByKey, false);
		TestingManager.addTest("TestPersonManagerHasTrait", TestHasTrait, true);
		TestingManager.addTest("TestPersonManagerHasTraitByKey", TestHasTraitByKey, true);
		TestingManager.addTest("TestPersonManagerLookupTrait", TestLookupTrait, Person.prototype.TRAIT_LIST["test"]);	
		TestingManager.addTest("TestCasePersonManagerAddTraitNonExistentTrait", TestCaseAddTraitNonExistentTrait, false);	
	}
);