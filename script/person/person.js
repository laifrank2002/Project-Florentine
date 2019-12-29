/**
	A thinking person. Has some sort of agency. Not always.
	@author laifrank2002
	@date 2019-12-29
 */
function Person(key = PersonManager.key++, birthday = 0)
{
	this.key = key;
	this.birthday = birthday;
	this.gender = Random.elementInArray(this.POSSIBLE_GENDERS);
	
	Object.assign(this, Person.prototype.DEFAULTS);
}

Person.prototype.DEFAULTS = 
{
	hitpoints: 10,
	health: 1.0,
	fatigue: 0.0,
	age: 18,
	birthday: 0,
	traits: ["human"],
	inventory: [],
	dead: false,
};

Person.prototype.POSSIBLE_GENDERS = ["male","female","unknown"];

Person.prototype.TRAIT_LIST = {
	"human": 
	{
		"name": "Human",
		"description": "A human being. Nothing special.",
	},
}
