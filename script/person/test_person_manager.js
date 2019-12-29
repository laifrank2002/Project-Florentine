/**
	TESTS SHOULD NOT BE RUN BY THEMSELVES. THESE ARE INTEGRATED TESTS.
	All the tests for PersonManager in one big integrated pile.
	We do this because it's a manager! And managers affect the world!
	Jokes on you if the world ain't working.
	@author laifrank2002
	@date 2019-12-29
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
		
		// tests 
		TestingManager.addTest("TestPersonManagerGetPersonByKey", TestGetPersonByKey, person1);
		TestingManager.addTest("TestPersonManagerRemovePerson", TestRemovePerson, undefined);
		TestingManager.addTest("TestPersonManagerRemovePersonByKey", TestRemovePersonByKey, undefined);
		TestingManager.addTest("TestPersonManagerAddPerson", TestAddPerson, true);
		TestingManager.addTest("TestPersonManagerContainsPerson", TestContainsPerson, true);
			
	}
);